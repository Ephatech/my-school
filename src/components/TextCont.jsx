import React from 'react';
import { Container, Row } from 'react-bootstrap';

const TextCont = ({head, body}) => {
    return (
        <Container>
            <Row>
                <h1 className='section-title pt-5'>{head}</h1>
            </Row>
            <Row>
                <p className='pt-3 section-description text-center'>{body}</p>
            </Row>
        </Container>
    );
}

export default TextCont;
