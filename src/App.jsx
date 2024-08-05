import CustomNavbar from './Components/Navbar/Navbar'
import Introduction from './Components/Introduction/Introduction';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Experiences from './Components/Experiences/Experiences';
import Projects from './Components/Projects/Projects';
import { HashRouter } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <CustomNavbar/>
        <section id="home"><Introduction /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experiences /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
      </div>
    </HashRouter>
  );
};

export default App; // Export App as the default export
