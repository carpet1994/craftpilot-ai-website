import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustLine } from "@/components/site/TrustLine";
import { Problem } from "@/components/site/Problem";
import { Solution } from "@/components/site/Solution";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { UseCase } from "@/components/site/UseCase";
import { Vision } from "@/components/site/Vision";
import { EarlyAccess } from "@/components/site/EarlyAccess";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "CraftPilot AI — AI Copilot for the Real World";
    const desc =
      "CraftPilot AI helps electricians and field teams reduce errors, save time, and document work automatically on-site.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) {
      m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
    }
    m.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", window.location.origin + "/");
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustLine />
        <Problem />
        <Solution />
        <HowItWorks />
        <Features />
        <UseCase />
        <Vision />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
