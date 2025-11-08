import Link from "next/link";

export type Project = {
  title: string;
  subtitle?: string;
  type: "mobile" | "web" | "experience";
  description: string;
  image?: string; // optional thumbnail in /public
  aspect?: string; // e.g., "9/19" for mobile, "16/9" for web
  ctas: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
  tags?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card smoke-red card-interactive p-4 md:p-6" tabIndex={0}>
      <div className="mt-0">
        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        {project.subtitle && (
          <p className="text-sm text-zinc-400">{project.subtitle}</p>
        )}
        <p className="mt-2 text-sm text-zinc-300">{project.description}</p>
        {project.tags && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2 py-1 text-[11px] text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4 flex flex-wrap gap-3">
          {project.ctas.map((cta) => (
            cta.external ? (
              <a
                key={cta.label}
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                {cta.label}
              </a>
            ) : (
              <Link key={cta.label} href={cta.href} className="btn btn-secondary">
                {cta.label}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

