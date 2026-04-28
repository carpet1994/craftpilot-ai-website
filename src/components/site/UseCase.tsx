import panelImg from "@/assets/usecase-panel.jpg";
import { Camera, ShieldCheck, ListChecks, FileText } from "lucide-react";

const flow = [
  { icon: Camera, title: "Open & capture", desc: "Electrician opens the panel and takes a photo with CraftPilot." },
  { icon: ShieldCheck, title: "Safety-first checklist", desc: "Receives a contextual safety and verification checklist before starting." },
  { icon: ListChecks, title: "Guided workflow", desc: "Steps through the intervention with clear, structured guidance." },
  { icon: FileText, title: "Automatic report", desc: "A complete job report is generated and ready to share." },
];

export const UseCase = () => {
  return (
    <section className="py-24">
      <div className="container-prose">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal relative">
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full" aria-hidden />
            <div className="relative glass-card overflow-hidden">
              <img
                src={panelImg}
                alt="Open electrical panel with neat wiring under industrial lighting"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4 reveal">Use Case</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight reveal">
              From opening a panel to a finished report — without breaking flow.
            </h2>
            <ol className="mt-8 space-y-5">
              {flow.map(({ icon: Icon, title, desc }, i) => (
                <li key={title} className="flex gap-4 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary/10 text-primary border border-primary/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
