export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <section className="section smoke-red py-12 md:py-16">
        <h1 className="text-3xl md:text-2xl font-semibold">Don’t overthink it. Just reach out.</h1>
        <p className="mt-3 text-zinc-300 max-w-2xl">
          Email me or reach out on LinkedIn.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="mailto:adypatanwar07@gmail.com" className="btn btn-secondary">Email</a>
          <a
            href="https://linkedin.com/in/aditya-patanwar"
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
