"use client";
import { useEffect, useRef, useState } from "react";

export default function Typewriter({
  titles,
  typingMs = 70,
  pauseMs = 1200,
  deleteMs = 45,
}: {
  titles: string[];
  typingMs?: number;
  pauseMs?: number;
  deleteMs?: number;
}) {
  const [reduced, setReduced] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(titles[0] || "");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    const current = mq ? mq.matches : false;
    window.setTimeout(() => setReduced(current), 0);
    if (!mq) return;
    const listener = () => setReduced(mq.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", listener);
    } else {
      mq.addListener(listener);
    }
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", listener);
      } else {
        mq.removeListener(listener);
      }
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const current = titles[index % titles.length] || "";

    if (phase === "typing") {
      if (text.length < current.length) {
        timer.current = window.setTimeout(() => setText(current.slice(0, text.length + 1)), typingMs);
      } else {
        timer.current = window.setTimeout(() => setPhase("pausing"), 0);
      }
    } else if (phase === "pausing") {
      timer.current = window.setTimeout(() => setPhase("deleting"), pauseMs);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer.current = window.setTimeout(() => setText(current.slice(0, text.length - 1)), deleteMs);
      } else {
        timer.current = window.setTimeout(() => {
          setPhase("typing");
          setIndex((i) => (i + 1) % titles.length);
        }, 0);
      }
    }

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [titles, index, text, phase, typingMs, pauseMs, deleteMs, reduced]);

  return (
    <span aria-live="polite" className="inline-flex items-center">
      <span>{text}</span>
      {!reduced && (
        <span className="ml-1 inline-block h-7 w-1 bg-white/80 animate-pulse" aria-hidden />
      )}
    </span>
  );
}
