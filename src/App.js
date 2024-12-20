// App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section id="herosection">
                  <HeroSection />
                </section>
                <section id="about">
                  <About />
                </section>
                <section id="projects">
                  <Projects />
                </section>
              </div>
            }
          />
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;