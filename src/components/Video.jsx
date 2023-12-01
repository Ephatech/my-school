import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container, Row } from 'react-bootstrap';

const Video = () => {
    return (
        <Container>
           <Row>
            <h1 className='text-center section-title mb-sm-2 mb-lg-5'>Administrative Message</h1>
           </Row>
           <Row>
           <iframe width="853" height="480" src="https://www.youtube.com/embed/0jS-QzYkQN8" title="Brewstew - Back To School" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
           </Row>
        </Container>
    );
}

export default Video;
