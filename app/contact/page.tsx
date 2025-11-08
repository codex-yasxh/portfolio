export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <section className="section py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">
          Email me or reach out on LinkedIn.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:you@example.com" className="btn btn-primary">Email</a>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
}
