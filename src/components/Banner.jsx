import React from 'react';
import banner from '../assets/banner.jpg'
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <Container fluid className='banner-container'>
      <Row className="justify-content-center align-items-center">
        <Col xs={12} className="text-center">
          <div className='banner'>
            <Container className='mt-sm-1 mt-md-5 py-3'>
              <h1 className='title py-3'>Where Learning Ignites Boundless Possibilities.</h1>
              <h4 className='sub-title'>Embraced by over  Ten Thousand students and parents </h4>
              <h5 className='sub-sub-title'>Remains free for academicians, eternally.</h5>
            </Container>
          </div>
          {/* <img className='banner-image' src={banner} alt="Banner" fluid /> */}
          <Button style={{fontFamily: 'Quicksand', fontWeight: 400,
   fontSize: '25px', backgroundColor:'#00b2f7', borderStyle:'none', borderRadius: '17px'}} className="explore my-5">Get started</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;