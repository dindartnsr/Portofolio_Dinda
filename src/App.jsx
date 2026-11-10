import About from "./components/About";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Skills from "./components/skills"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import {profile, skills, projects, socials} from "./data/portofolio";

function App() {
  return (
    <>
    <Navbar initials={profile.initials} />
    <Hero profile={profile} />
    <About profile={profile} />
    <Skills skills={skills} />
    <Projects projects={projects} />
    <Contact socials={socials} />
    </>

  );
}

export default App;
