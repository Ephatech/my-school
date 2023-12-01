import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Card from './Card';
import './Slider.css'

const Slider = () => {
    return (
        <div>
            <Row>
            <h1 className='text-center my-sm-3 pt-5 pb-lg-3 section-title'>Stakeholders</h1>
            </Row>
            <div className='d-flex stake'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
}

export default Slider;
