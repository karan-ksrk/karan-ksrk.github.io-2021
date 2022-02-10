import './App.css';
import { Hero } from './components/hero';
import NavBar from './components/navBar';
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects';
import Contact from './components/contact';
import Social from './components/social';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="section2-container">
        <About />
        <Skills />
      </div>
      <Projects />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
