import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Team } from "@/components/Team";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Solutions />
      <About />
      <Features />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
