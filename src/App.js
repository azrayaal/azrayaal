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

import 'aos/dist/aos.css'; // You can also use <link> for styles
import Futer from './components/footer/footer';
import Loader from './components/loader/loader';
import Pagenotfound from './pages/404';
// ..

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
    // TODO CARI LOADER DAN AKTIFIN LAGI
    // TIME BUAT LOADERNYA
    // }, 2200);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <div className="App">
          <ScrollToTop />
          <Navbaar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          <Futer />
        </div>
      )}
    </Router>
  );
}

export default App;
