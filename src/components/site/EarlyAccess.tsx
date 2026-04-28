import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export const EarlyAccess = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="early-access" className="py-24">
      <div className="container-prose grid lg:grid-cols-2 gap-12 items-start">
        <div className="reveal">
          <p className="text-sm uppercase tracking-[0.2em] text-primary mb-4">Early Access</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Join the first wave of teams shaping CraftPilot AI.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We're working closely with electrical contractors, maintenance teams, and field service operators to design
            a copilot that fits real workflows. Tell us about your team and we'll get in touch.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Hands-on pilot programs with direct product input</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Strategic discussions for partners and investors</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Designed to support — not replace — certified expertise</li>
          </ul>
        </div>

        <div className="glass-card p-7 sm:p-9 reveal">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary/15 text-primary border border-primary/30">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">Thanks — we'll be in touch.</h3>
              <p className="mt-2 text-muted-foreground">
                Your request has been received. Our team will reach out shortly to discuss next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Full name</Label>
                <Input id="name" required placeholder="Jane Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Work email</Label>
                <Input id="email" type="email" required placeholder="jane@company.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Role / Company</Label>
                <Input id="role" required placeholder="Operations Manager, Acme Electric" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Tell us about your team and what you're looking to solve." />
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-2">
                Request Early Access
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about CraftPilot AI. We will not share your details.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
