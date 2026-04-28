import { Mic, Eye, ListChecks, FileText, History, Users } from "lucide-react";

const features = [
  { icon: Mic, title: "Voice-first guidance", desc: "Operate hands-free in noisy, demanding environments where typing isn't an option." },
  { icon: Eye, title: "Image-assisted analysis", desc: "Snap a photo of a panel or component and receive contextual technical guidance." },
  { icon: ListChecks, title: "Smart checklists", desc: "Adaptive procedures that match the equipment, environment, and job type." },
  { icon: FileText, title: "Automatic reports", desc: "Structured documentation generated from real activity — ready to share with clients." },
  { icon: History, title: "Work history", desc: "A searchable timeline of every intervention, with photos, notes, and outcomes." },
  { icon: Users, title: "Team-ready workflows", desc: "Shared procedures and reports designed for crews, supervisors, and back-office." },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/20 border-y border-border">
      <div className="container-prose">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Features</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Built around how field work actually happens.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="glass-card p-6 group hover:border-primary/40 transition-colors reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
