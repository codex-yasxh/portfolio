import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100" id="top">
      <Header />
      <div className="h-14 md:h-16" />
      <Hero />

      <section id="about" className="section py-8 md:py-10">
        <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Started in 2024, built from scratch, No Shortcuts.
          I build faster and heavy-scalable mobile apps and web UIs focused on
          performance, clean UX, and accessible interactions.

        </p>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Core Tech Stacks - Kotlin and Jetpack Compose, Flutter, React Native & NodeJS.
        </p>
      </section>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <section id="contact" className="section py-12 md:py-16">
        <div className="card p-6 md:p-8 flex flex-col gap-4 items-start">
          <h3 className="text-xl md:text-2xl font-semibold">
            Let’s build something
          </h3>
          <p className="text-zinc-300">
            For inquiries or collaborations, reach out anytime.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:you@example.com" className="btn btn-primary">
              Email
            </a>
            <a href="/contact" className="btn btn-secondary">
              Contact Page
            </a>
            <a
              href="https://linkedin.com/in/aditya-patanwar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/codex-yasxh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/Adit7xx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

