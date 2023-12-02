import React from 'react';
import './Gallary.css'
import { Container, Row } from 'react-bootstrap';

const Galary = ({ photos }) => {
  return (
    <>
    <Row>
            <h1 className='pt-sm-2 pt-lg-5 pb-3 section-title'>Gallery</h1>
    </Row>
    <Container className="photo-gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo">
          <img src={photo.url} alt={photo.caption} />
          <div className="caption">{photo.caption}</div>
        </div>
      ))}
    </Container>
    </>
  );  
};

export default Galary;