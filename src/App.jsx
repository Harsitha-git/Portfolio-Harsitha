
import 'bootstrap/dist/css/bootstrap.min.css';
import ExperienceSection from "./Components/Experience"
import HeroSection from "./Components/HeroSection"
import LinksSection from "./Components/LinksSection"

import PersonalProjectsSection from "./Components/Projects"
import ProjectsSection from "./Components/ProjectsSection"

import SimpleNavBar from './Components/NavBar';
import AboutSection from './Components/AboutSection';





function App() {
  

  return (
    <>
      <div className="bg-black">
       
      <SimpleNavBar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      
      <PersonalProjectsSection />
      <ProjectsSection />
      <LinksSection />


      </div>
     
    </>
  )
}

export default App
