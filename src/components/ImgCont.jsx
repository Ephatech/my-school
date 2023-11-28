import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ImgCont.css';

const ImgCont = ({title, desc, img, ord}) => {
  return (
    <Container>
      <Row className='py-4 py-lg-5'>
        <Col sm={12} className='my-lg-1'>
        <h1 className='section-title'>{title}</h1>
        </Col>
        <Col md={6} className={`d-flex align-items-center justify-content-center" ${ord ? 'order-md-1' : 'order-md-2'} order-sm-1`}>
          <img src={img} alt="Image" className="img-fluid" />
        </Col>
        <Col md={6} className={`mt-lg-4 ${ord ? 'order-md-2' : 'order-md-1'}`}>
          <p className='section-description py-lg-2'>{desc}</p>
          <div className='btn-cont'>
          <Button style={{ fontFamily: 'Quicksand', fontWeight: 400,
   fontSize: '25px', backgroundColor:'#e86c6c', borderStyle:'none', borderRadius: '17px'}} className="explore">Read More</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImgCont;