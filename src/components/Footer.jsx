import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  const [showGroups, setShowGroups] = useState({});

  const toggleGroup = (group) => {
    setShowGroups((prevShowGroups) => ({
      ...prevShowGroups,
      [group]: !prevShowGroups[group]
    }));
  };

  return (
    <footer className="my-footer footer mt-auto py-3">
      <Container>
        <Row className='mx-auto'>
          <Col sm={12} md={6} lg={3}>
            <h5 className='link-head' onClick={() => toggleGroup('group1')}>Group 1</h5>
            {showGroups['group1'] && (
              <ul className="list-unstyled">
                <li>
                  <a href="#link1">Link 1</a>
                </li>
                <li>
                  <a href="#link2">Link 2</a>
                </li>
                <li>
                  <a href="#link1">Link 3</a>
                </li>
                <li>
                  <a href="#link2">Link 4</a>
                </li>
                <li>
                  <a href="#link1">Link 5</a>
                </li>
                <li>
                  <a href="#link2">Link 6</a>
                </li>
              </ul>
            )}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h5  className='link-head' onClick={() => toggleGroup('group2')}>Group 2</h5>
            {showGroups['group2'] && (
              <ul className="list-unstyled">
              <li>
                <a href="#link1">Link 1</a>
              </li>
              <li>
                <a href="#link2">Link 2</a>
              </li>
              <li>
                <a href="#link1">Link 3</a>
              </li>
              <li>
                <a href="#link2">Link 4</a>
              </li>
              <li>
                <a href="#link1">Link 5</a>
              </li>
              <li>
                <a href="#link2">Link 6</a>
              </li>
            </ul>
            )}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h5  className='link-head' onClick={() => toggleGroup('group3')}>Group 3</h5>
            {showGroups['group3'] && (
              <ul className="list-unstyled">
              <li>
                <a href="#link1">Link 1</a>
              </li>
              <li>
                <a href="#link2">Link 2</a>
              </li>
              <li>
                <a href="#link1">Link 3</a>
              </li>
              <li>
                <a href="#link2">Link 4</a>
              </li>
              <li>
                <a href="#link1">Link 5</a>
              </li>
              <li>
                <a href="#link2">Link 6</a>
              </li>
            </ul>
            )}
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h5  className='link-head' onClick={() => toggleGroup('group4')}>Group 4</h5>
            {showGroups['group4'] && (
              <ul className="list-unstyled">
              <li>
                <a href="#link1">Link 1</a>
              </li>
              <li>
                <a href="#link2">Link 2</a>
              </li>
              <li>
                <a href="#link1">Link 3</a>
              </li>
              <li>
                <a href="#link2">Link 4</a>
              </li>
              <li>
                <a href="#link1">Link 5</a>
              </li>
              <li>
                <a href="#link2">Link 6</a>
              </li>
            </ul>
            )}
          </Col>
          {/* <Col sm={12} md={6} lg={2}>
            <h5  className='link-head' onClick={() => toggleGroup('group5')}>Group 5</h5>
            {showGroups['group5'] && (
              <ul className="list-unstyled">
              <li>
                <a href="#link1">Link 1</a>
              </li>
              <li>
                <a href="#link2">Link 2</a>
              </li>
              <li>
                <a href="#link1">Link 3</a>
              </li>
              <li>
                <a href="#link2">Link 4</a>
              </li>
              <li>
                <a href="#link1">Link 5</a>
              </li>
              <li>
                <a href="#link2">Link 6</a>
              </li>
            </ul>
            )}
          </Col> */}
        </Row>
        <br/>
        <hr/>
        <Row>
            <p style={{textAlign:'center'}}>Our school website boasts a fully responsive design, ensuring an optimal browsing experience across various devices and screen sizes. The layout and content dynamically adapt to provide an engaging and visually appealing interface for all users. The design elements, such as fonts, colors, and images, are carefully curated to reflect the school's brand identity and create a cohesive and professional look. The intuitive navigation allows visitors to effortlessly explore different sections, including academic programs, faculty profiles, extracurricular activities, and admission information. The website's amazing design not only captures attention but also enhances user experience by prioritizing usability and accessibility. Its interactive features, such as photo galleries, video testimonials, and virtual tours, enable visitors to immerse themselves in the vibrant school community. The combination of aesthetic appeal, seamless responsiveness, and user-friendly design makes our school website a standout platform for showcasing our institution's excellence.</p>
        </Row>
        <hr/>
        <Row>
            <Col className='text-center' sm={12} md={4}>myschool.net</Col>
            <Col className='text-center' sm={12} md={4}> <p>&copy; 2023 My School. All rights reserved.</p></Col>
            <Col className='text-center' sm={12} md={4}>Designed By : <a className='designer' href='https://portfolio-ephatech.web.app/' target='_blank'>Ephrem T.</a></Col>
        </Row>
        <br/>
        <Row>
        <p className='logo text-center'>My School</p>
        </Row>   
        <br/>
      </Container>
    </footer>
  );
};

export default Footer;