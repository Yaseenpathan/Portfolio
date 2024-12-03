import React, { useRef } from "react";
import NavbarComponent from "./components/NavBar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavigation = (section) => {
    const refs = {
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      about: aboutRef,
      contact: contactRef,
    };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavbarComponent onNavigate={handleNavigation} />

      <section ref={homeRef} id="home">
        <Home />
      </section>

      <section ref={skillsRef} id="skills">
        <Skills />
      </section>

      <section ref={projectsRef} id="projects">
        <Projects />
      </section>

      <section ref={aboutRef} id="about">
        <About />
      </section>

      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
