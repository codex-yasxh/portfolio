"use client";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
};

export default function Reveal({ children, delayMs = 0, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.dataset.revealed = "true";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ transitionDelay: `${delayMs}ms` }}>
      {children}
    </div>
  );
}
