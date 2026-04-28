import { AlertTriangle, FileX, Clock, Brain } from "lucide-react";

const problems = [
  { icon: Brain, title: "Reliance on memory", desc: "Critical procedures depend on what each technician remembers in the moment." },
  { icon: FileX, title: "Paper notes & lost reports", desc: "Job details get scribbled on paper, photographed, and rarely make it back into the system." },
  { icon: AlertTriangle, title: "Fragmented tools", desc: "Knowledge is scattered across PDFs, chats, manuals, and tribal know-how." },
  { icon: Clock, title: "Manual documentation", desc: "Reports are written hours later from memory, eating into billable time." },
];

export const Problem = () => {
  return (
    <section id="problem" className="py-24">
      <div className="container-prose">
        <div className="max-w-2xl reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Field work still runs on memory, paper, and disconnected tools.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            While office work has been transformed by software, the people keeping infrastructure running are
            still left without the right digital support on-site.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="glass-card p-6 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary text-primary">
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
