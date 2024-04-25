import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from './azrayaal.png';
import './navbar.css';
// import logo from './temp logo.png';

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Link to={to} {...props} className={isActive ? 'active mx-3  navbarmenu' : 'text-light mx-3  navbarmenu'}>
      {children}
    </Link>
  );
}

function Navbaar() {
  return (
    <Navbar className="f-top" expand="lg">
      {/* <div className="container-fluid"> */}
      <CustomLink to="/" className="text-light navbarlogo">
        {/* <img src={logo} alt="" className="logoazra" /> */}
      </CustomLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-togler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" id="navbarasli">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/skills">Skills</CustomLink>
          <CustomLink to="/project">Projetcs</CustomLink>
          <CustomLink to="/contact">Contacts</CustomLink>
        </Nav>
      </Navbar.Collapse>
      {/* </div> */}
    </Navbar>
  );
}

export default Navbaar;
