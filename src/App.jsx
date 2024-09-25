import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectContainer from "./components/ProjectContainer"
import Skills from "./components/Skills"


function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <ProjectContainer />
      <ContactMe />
      <Footer/>
    </>
  )
}

export default App
