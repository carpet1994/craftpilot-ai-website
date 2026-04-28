import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div aria-hidden className="absolute inset-0 grid-bg opacity-40" />
      <div className="container-prose relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Now onboarding pilot partners
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              AI Copilot for the <span className="text-gradient">Real World</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              CraftPilot AI helps electricians and field teams reduce errors, save time, and document work automatically on-site.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="#early-access">Join Early Access <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outlineLight" size="lg">
                <a href="#how">See How It Works</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Supports professional judgment — does not replace certified expertise.
            </div>
          </div>

          <div className="reveal relative">
            <div className="absolute -inset-6 bg-primary/10 blur-3xl rounded-full" aria-hidden />
            <div className="relative glass-card overflow-hidden">
              <img
                src={heroImg}
                alt="Electrician using CraftPilot AI on a smartphone in front of an electrical panel"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
