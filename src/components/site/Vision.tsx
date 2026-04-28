import { Button } from "@/components/ui/button";

const stats = [
  { v: "$1T+", l: "Global skilled trades market" },
  { v: "<5%", l: "Field workflows truly digitized today" },
  { v: "30M+", l: "Field professionals in target geographies" },
];

export const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-secondary/20 border-y border-border">
      <div className="container-prose">
        <div className="max-w-3xl reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Market Vision</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            AI shouldn't stop at the office. Skilled field labor is a massive,
            <span className="text-gradient"> under-digitized market.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            The first wave of AI focused on knowledge workers. The next wave belongs to the people who build, maintain, and repair the
            physical world. CraftPilot AI is purpose-built for that shift — meeting professionals where they actually work.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <div key={s.l} className="glass-card p-7 reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="text-4xl font-bold text-gradient">{s.v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 reveal">
          <Button asChild variant="hero" size="lg">
            <a href="#early-access">Run a pilot with us</a>
          </Button>
          <Button asChild variant="outlineLight" size="lg">
            <a href="#early-access">Strategic conversations</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
