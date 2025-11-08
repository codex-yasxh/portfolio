"use client";
import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Reveal from "@/components/Reveal";

type Props = { showMore?: boolean };

export default function ProjectsSection({ showMore = true }: Props) {
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section id="projects" className="section py-12 md:py-16">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100">Projects</h2>
        <div className="flex flex-wrap items-center gap-2 md:justify-end">
          <button
            className={`chip ${filter === "all" ? "chip-active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`chip ${filter === "mobile" ? "chip-active" : ""}`}
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </button>
          <button
            className={`chip ${filter === "web" ? "chip-active" : ""}`}
            onClick={() => setFilter("web")}
          >
            Web
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((p, i) => (
          <Reveal key={p.title} delayMs={i * 90}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      {showMore && (
        <div className="mt-8 flex justify-center">
          <a href="/projects" className="btn btn-primary">More Projects</a>
        </div>
      )}
    </section>
  );
}
