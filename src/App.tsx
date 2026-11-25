import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Research } from "./components/Research";
import { Work } from "./components/Work";
import { navItems } from "./content";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = navItems.map((item) => item.href.slice(1));

export default function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header active={active} />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Work />
        <Research />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
