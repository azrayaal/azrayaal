import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbaar() {
  return (
    <Navbar bg="" expand="lg">
      <Container fluid>
        <Link to="/" className="text-light navbarlogo">
          azrayaal
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-togler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/about" className="mx-3 text-light navbarmenu">
              About
            </Link>
            <Link to="/skills" className="mx-3 text-light navbarmenu">
              Skills
            </Link>
            <Link to="/projects" className="mx-3 text-light navbarmenu">
              Projetcs
            </Link>
            <Link to="/contact" className="mx-3 text-light navbarmenu">
              Contacts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbaar;
