import './App.css';
import { Hero } from './components/hero';
import NavBar from './components/navBar';
import About from './components/about'
import Skills from './components/skills'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="section2-container">
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;