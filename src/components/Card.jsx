import React from 'react';
import avatar from '../assets/836.jpg';
import './Card.css'

const Card = () => {
    return (
        <div className='text-center mx-3 mb-5 pb-3' style={{width:'300px', border:'solid 2px black', borderRadius:'15px'}}>
            <img className='mt-2 mx-auto' style={{width:'250px'}} src={avatar} alt=''/>
            <h4>Jhon Doe</h4>
            <h5>Project Manager</h5>
            <a className='see-more'>See more</a>
        </div>
    );
}


export default Card;
