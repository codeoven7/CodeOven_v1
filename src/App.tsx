import { useState } from "react";
import { LogoReveal } from "./components/LogoReveal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Process } from "./components/Process";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [showLogoReveal, setShowLogoReveal] = useState(true);

  const handleLogoRevealComplete = () => {
    setShowLogoReveal(false);
  };

  if (showLogoReveal) {
    return <LogoReveal onComplete={handleLogoRevealComplete} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Team />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}