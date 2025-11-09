import Reveal from "@/components/Reveal";
import { experience } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section className="section py-12 md:py-16">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100">Work Experience</h2>
        <p className="mt-2 text-zinc-300">Selected industry experience and contributions.</p>
      </div>
      <div className="flex flex-col gap-6">
        {experience.map((item, i) => (
          <Reveal key={item.company + i} delayMs={i * 90}>
            <article className="card smoke-red p-5 md:p-6">
              <header className="flex flex-col gap-2 md:grid md:grid-cols-3 md:items-start md:gap-4">
                <div className="text-zinc-200 font-medium">{item.company}</div>
                <div className="text-zinc-300">{item.role}</div>
                <div className="md:text-right text-zinc-400">{item.duration}</div>
              </header>
              <div className="mt-3">
                {item.project.external ? (
                  <a
                    href={item.project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-100 hover:text-white underline underline-offset-4 decoration-white/20"
                  >
                    {item.project.name}
                  </a>
                ) : (
                  <a href={item.project.href} className="text-zinc-100 hover:text-white underline underline-offset-4 decoration-white/20">
                    {item.project.name}
                  </a>
                )}
              </div>
              {item.features && item.features.length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-zinc-300 space-y-2">
                  {item.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
