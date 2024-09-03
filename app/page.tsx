import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experiences from "../components/experiences/Experiences";
import Hero from "../components/hero/Hero";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";

export default function Home() {
    return (
        <section className="max-w-[1400px]">
            <Hero />
            <Skills />
            <Projects />
            <Experiences />
            <Contact />
        </section>
    );
}
