import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Header.css'

const Header = () => {

  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setIsHeaderFixed(scrollPosition > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={isHeaderFixed ? 'fixed-header' : 'my-nav'} collapseOnSelect expand="lg">
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