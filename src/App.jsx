import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Header from './components/Header';
import Resume from './pages/Resume';
import Contact from './pages/Contact'
import { Element } from 'react-scroll';

const App = () => {
  return (
    <Router>
    <div className='min-h-screen bg-gradient-to-t from-black via-gray-700 to-gray-400'>
      <Header />
      <main>
        <Element id="home" name="home" className="h-screen">
          <Home />
        </Element>
        <Element id="projects" name="projects" className="h-screen">
          <Projects />
        </Element>
        <Element id="contact" name="contact" className="h-screen">
          <Contact />
        </Element>
        <Element id="resume" name="resume" className="h-screen">
          <Resume />
        </Element>
      </main>
    </div>
  </Router>
  )
}

export default App