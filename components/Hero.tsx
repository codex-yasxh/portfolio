import Reveal from "@/components/Reveal";
import SocialIcons from "@/components/SocialIcons";
import DotBlinkOverlay from "@/components/DotBlinkOverlay";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section className="section py-16 md:py-24">
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
        <Reveal className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-hero-pulse" />
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-100">
            Aditya Patanwar
          </h1>
          <h6 className="text-2xl font-semibold tracking-tight text-zinc-100">
            <Typewriter
              titles={[
                "Full Stack Mobile App Developer",
                "Native Android Developer",
                "Flutter Developer",
                "Product Builder",
              ]}
              typingMs={85}
              pauseMs={1100}
              deleteMs={45}
            />
          </h6>
          <p className="max-w-2xl text-zinc-300 text-base md:text-lg">
           I’m Aditya — Android developer and product-focused builder.
           
I don’t code for assignments, I code to ship things people actually use.
Kotlin, Compose, Coroutines, Room, Hilt, Ktor, clean architecture, predictable state.

          </p>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-zinc-100">Contact Me</h3>
            <SocialIcons />
          </div>
        </Reveal>
        <Reveal delayMs={120}>
          <div
            className="tilt-hover relative rounded-xl border border-white/10 bg-white/5 w-full max-w-[220px] md:max-w-[300px] justify-self-center md:justify-self-end overflow-hidden"
            style={{ aspectRatio: "1 / 1" }}
          >
            <img
              src="/toji.jpg"
              alt="Portrait"
              className="h-full w-full object-cover halftone halftone-breath blink-soft"
            />
            <DotBlinkOverlay density={0.006} minRadius={2} maxRadius={4} fadeMs={650} spawnEveryMs={420} />
          </div>
        </Reveal>
        
      </div>
    </section>
  );
}
