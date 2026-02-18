import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI();

const MAX_TEXT_LENGTH = 4096;
const TTS_CHAR_LIMIT = 500; // Keep TTS fast — ~15s of speech

/** Strip markdown formatting and truncate to keep TTS under ~15s */
function prepareTTSText(raw: string): string {
  let text = raw
    .replace(/#{1,6}\s+/g, "")          // headings
    .replace(/\*\*(.*?)\*\*/g, "$1")     // bold
    .replace(/\*(.*?)\*/g, "$1")         // italic
    .replace(/`{1,3}[^`]*`{1,3}/g, "")  // code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/[-*]\s+/g, ". ")           // list bullets → pauses
    .replace(/\d+\.\s+/g, ". ")          // numbered lists
    .replace(/\n{2,}/g, ". ")            // paragraph breaks
    .replace(/\n/g, " ")                 // remaining newlines
    .replace(/\s{2,}/g, " ")            // collapse whitespace
    .trim();

  if (text.length > TTS_CHAR_LIMIT) {
    // Cut at last sentence boundary before limit
    const truncated = text.slice(0, TTS_CHAR_LIMIT);
    const lastPeriod = truncated.lastIndexOf(". ");
    text = lastPeriod > TTS_CHAR_LIMIT * 0.4
      ? truncated.slice(0, lastPeriod + 1)
      : truncated + "...";
  }

  return text;
}

// Simple in-memory rate limit
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateMap.get(ip) || [];
  const recent = timestamps.filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return false;
  recent.push(now);
  rateMap.set(ip, recent);
  return true;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { text } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "No text provided." },
        { status: 400 }
      );
    }

    if (text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json(
        { error: `Text too long. Maximum ${MAX_TEXT_LENGTH} characters.` },
        { status: 400 }
      );
    }

    const ttsInput = prepareTTSText(text);

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "onyx",
      input: ttsInput,
      response_format: "mp3",
    });

    // Stream the audio through instead of buffering the whole thing
    const stream = response.body;
    return new NextResponse(stream as ReadableStream, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err: unknown) {
    console.error("TTS error:", err);
    const message = err instanceof Error ? err.message : "Speech synthesis failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
