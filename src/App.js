import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import About from './components/About/about';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
    <Header/> 
    <Homepage/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </BrowserRouter>

    
  );
}

export default App;
