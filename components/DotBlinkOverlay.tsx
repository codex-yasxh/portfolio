"use client";
import { useEffect, useRef } from "react";

export default function DotBlinkOverlay({
  density = 0.008, // fraction of area used for potential blinks per second
  minRadius = 2,
  maxRadius = 5,
  fadeMs = 700,
  spawnEveryMs = 350,
}: {
  density?: number;
  minRadius?: number;
  maxRadius?: number;
  fadeMs?: number;
  spawnEveryMs?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);
  const blinksRef = useRef<{ x: number; y: number; r: number; t0: number }[]>(
    []
  );

  useEffect(() => {
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduce) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // resolve background color from CSS variable for a hollow effect matching the page bg
    const containerStyles = getComputedStyle(canvas.parentElement as Element);
    const bgColor = containerStyles.backgroundColor || "#0a0a0a";

    let w = 0,
      h = 0,
      dpr = 1;

    const resize = () => {
      const parent = canvas.parentElement as HTMLElement;
      const rect = parent.getBoundingClientRect();
      dpr = window.devicePixelRatio || 1;
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement as Element);

    const spawn = () => {
      // spawn N blinks based on area and density
      const area = w * h;
      const n = Math.max(1, Math.floor(area * density * (spawnEveryMs / 1000)));
      const now = performance.now();
      for (let i = 0; i < n; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = minRadius + Math.random() * (maxRadius - minRadius);
        blinksRef.current.push({ x, y, r, t0: now });
      }
    };

    timerRef.current = window.setInterval(spawn, spawnEveryMs);

    const draw = () => {
      const now = performance.now();
      ctx.clearRect(0, 0, w, h);
      // draw each active blink with eased alpha
      blinksRef.current = blinksRef.current.filter((b) => now - b.t0 < fadeMs);
      for (const b of blinksRef.current) {
        const t = (now - b.t0) / fadeMs; // 0..1
        // ease in-out
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        const alpha = 1 * (1 - Math.abs(0.5 - t) * 2); // peak at mid, clearer holes
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r + 0.5 * eased, 0, Math.PI * 2);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = bgColor;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
      ro.disconnect();
    };
  }, [density, minRadius, maxRadius, fadeMs, spawnEveryMs]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden />
  );
}
