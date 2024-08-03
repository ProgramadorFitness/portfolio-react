import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects';
import Header from './components/Header';
import Resume from './pages/Resume';
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
        <Header/>
        <main className=''>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
        </main>
    </Router>
  )
}

export default App