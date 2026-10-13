import About from "./components/About";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary px-4 sm:px-6 lg:px-8">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <ContactSection />
      <Footer />
    </div>
  );
}
