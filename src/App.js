import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Contact from './pages/contact/contact';
import Project from './pages/projects/project';
import ScrollToTop from './components/scrollToTop/scrollToTop';
import Navbaar from './components/navbar/navbar';
import { NewtonsCradle } from '@uiball/loaders';

import React, { useEffect, useState } from 'react';
// import HashLoader from 'react-spinners/HashLoader';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2200);
  }, []);

  return (
    <Router>
      {loading ? (
        <div className="loader">
          {/* <HashLoader color="#36d7b7" size={80} /> */}
          <NewtonsCradle size={60} color="#36d7b7" />
        </div>
      ) : (
        <>
          <ScrollToTop />
          <Navbaar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
