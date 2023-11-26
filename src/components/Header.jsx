import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// Import the Bootstrap CSS file
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the Bootstrap JavaScript file (optional, only if you need interactive components)
import 'bootstrap/dist/js/bootstrap.min.js';
import './Header.css'

const Header = () => {
  return (
    <Navbar className='my-nav' collapseOnSelect expand="lg">
      <Container className='py-2 py-lg-4' >
        <Navbar.Brand className="logo mx-4 " href="#home">My School</Navbar.Brand>
        <Navbar.Toggle style={{marginBottom:'5px', height:'30px',borderStyle:'none'}} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="mx-5 ">
            <Nav.Link href="#about" className="links mx-5" >About</Nav.Link>
            <Nav.Link href="#courses" className="links mx-5">Courses</Nav.Link>
            <Nav.Link href="#courses" className="links mx-5">Courses</Nav.Link>
            <Nav.Link href="#courses" className="links mx-5">Courses</Nav.Link>
            <Nav.Link href="#courses" className="btn my-1 my-lg-0 mx-5 px-3" style={{ backgroundColor: '#59899f'}}>SignIn</Nav.Link>
            <Nav.Link href="#courses" className="btn mx-5 px-3" style={{backgroundColor: '#e86c6c'}}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            
      </Container>
    </Navbar>
  );
};

export default Header;