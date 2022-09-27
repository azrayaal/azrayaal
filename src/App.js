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
import Futer from './components/footer/footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Futer /> */}
    </Router>
  );
}

export default App;
