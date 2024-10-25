import React from 'react'
import {Link} from 'react-router-dom';
import {arrow } from '../assets/icons';


const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className = "font-medium sm:text-x1 text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className ="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue 
        py-4 px-8 text-white mx-5">
        Hi! My name is <span className = "font-semibold">Kelly</span> 🍿
        <br/>
        A Grade 12 Student from EOM SS
        </h1>
    ),
    2: (
        <InfoBox 
            text="My hobbies include singing, reading, and going out!"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text="In the future, I want to start recording my own music!"
            link="/projects"
            btnText="Songs I want to sing!"
        />
    ),
    4: (
        <InfoBox 
            text="Please contact me if you know anything about music production!"
            link="/contact"
            btnText="Contact me!"
        />
    ),
}
 
const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo