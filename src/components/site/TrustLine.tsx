import { HardHat, Wrench, Zap, Cog, Building2, Truck } from "lucide-react";

const items = [
  { icon: Zap, label: "Electricians" },
  { icon: Wrench, label: "Technicians" },
  { icon: Cog, label: "Maintenance" },
  { icon: HardHat, label: "Field Operators" },
  { icon: Building2, label: "Facility Teams" },
  { icon: Truck, label: "Service Crews" },
];

export const TrustLine = () => {
  return (
    <section className="py-14 border-y border-border bg-secondary/20">
      <div className="container-prose reveal">
        <p className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Built for electricians, technicians, maintenance teams, and field operators
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 text-muted-foreground">
              <Icon className="h-5 w-5 text-primary/80" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
