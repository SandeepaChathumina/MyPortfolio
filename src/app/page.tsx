import Hero from "./components/Hero";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Certificates />
    </main>
  );
}