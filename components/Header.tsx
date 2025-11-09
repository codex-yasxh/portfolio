"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      setHidden(y > lastY.current && y > 64); // hide when scrolling down after passing header height
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300",
        "supports-backdrop-filter:backdrop-blur",
        scrolled ? "bg-black/40 ring-1 ring-white/10" : "bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <div className="section h-14 md:h-16 flex items-center justify-between">
        <Link href="#top" className="text-sm font-semibold text-zinc-100">
          Indie Product Builder
        </Link>
        <div className="flex items-center gap-3 md:gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="mailto:adypatanwar07@gmail.com" className="hover:text-white">Email</a>
          </nav>
          <a href="#top" className="block h-8 w-8 rounded-full overflow-hidden ring-1 ring-white/10 hover:ring-white/20">
            <img src="/toji.jpg" alt="avatar" className="h-full w-full object-cover" />
          </a>
        </div>
      </div>
    </header>
  );
}
