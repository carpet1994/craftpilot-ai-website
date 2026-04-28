import { Mic, Camera, ListChecks, FileText } from "lucide-react";

const items = [
  { icon: Mic, title: "Voice guidance", desc: "Hands-free interaction so technicians stay focused on the work, not the screen." },
  { icon: Camera, title: "Image-assisted support", desc: "Capture a panel, component, or schematic and get contextual guidance." },
  { icon: ListChecks, title: "Structured checklists", desc: "Standardized workflows that bring consistency and reduce avoidable mistakes." },
  { icon: FileText, title: "Automatic reports", desc: "Job documentation generated as work happens — not at the end of the day." },
];

export const Solution = () => {
  return (
    <section id="solution" className="py-24 bg-secondary/20 border-y border-border">
      <div className="container-prose">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Our Solution</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            A practical AI copilot designed for the conditions of real fieldwork.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            CraftPilot AI brings together voice, vision, and structured workflows into a single tool that
            supports skilled professionals throughout the job.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="glass-card p-7 flex gap-5 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary border border-primary/20">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
