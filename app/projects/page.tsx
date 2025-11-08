import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <section className="section py-2 md:py-4">
        <h1 className="text-3xl md:text-4xl font-semibold">All Projects</h1>
      </section>
      <ProjectsSection showMore={false} />
    </div>
  );
}
