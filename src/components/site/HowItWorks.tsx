const steps = [
  {
    n: "01",
    title: "Capture",
    desc: "Technician describes the situation by voice or takes a photo of the equipment, panel, or schematic on-site.",
  },
  {
    n: "02",
    title: "Understand",
    desc: "CraftPilot AI interprets the context, references the right procedures, and proposes a structured workflow.",
  },
  {
    n: "03",
    title: "Execute",
    desc: "The technician follows clear checklists; the system documents each step and produces a clean report.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="py-24">
      <div className="container-prose">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Three steps from on-site reality to documented job.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] divider-line" aria-hidden />
          {steps.map((s, i) => (
            <div key={s.n} className="glass-card p-8 relative reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-baseline gap-3">
                <span className="text-primary font-mono text-sm">{s.n}</span>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
