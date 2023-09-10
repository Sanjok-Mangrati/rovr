import React from 'react';
import './header.css';
import headerImage from '../../assets/headerImage.png';

const Header = () => {
  return (
    <div className="rovr__header-container">
        <div className="rovr__header-container_left-section">
            <div className="rovr__header-container_left-section_title">
            <h1>Explore The Unexplored: <br/> Your Journey, Our Wheels, ROVR On!</h1>
            </div>
            <div className="rovr__header-container_left-section_buttons">
                <a href="#book" className='bookbtn'>Book ROVR Now</a>
                <span>Need Help? <a href="tel:+917001916576" className='callbtn'>Call Us</a></span>
                
            </div>
        </div>
        <div className="rovr__header-container_image">
            <img src={headerImage} alt="header-image" />
        </div>
    </div>
  )
}

export default Header