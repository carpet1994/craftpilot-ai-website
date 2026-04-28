import { Zap } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-prose py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#top" className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
                <Zap className="h-4 w-4" strokeWidth={2.5} />
              </span>
              CraftPilot<span className="text-primary"> AI</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              An AI copilot for electricians and field teams — built to support skilled professionals, not replace them.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#how" className="hover:text-foreground">How it works</a></li>
              <li><a href="#early-access" className="hover:text-foreground">Early Access</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#vision" className="hover:text-foreground">Vision</a></li>
              <li><a href="#early-access" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CraftPilot AI. All rights reserved.</p>
          <p>CraftPilot AI supports professional judgment and does not replace certified expertise.</p>
        </div>
      </div>
    </footer>
  );
};
