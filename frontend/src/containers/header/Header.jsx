import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import mascot from '../../assets/mascot.png'
const Header = () => {
  return (
    <div className="ftm__header section__padding" id="home">
      <div className="ftm__header-content">
        <h1 className="gradient__text">
        Enabling parents and involving kids through gamified task management          
        </h1>
        <p>Empower your kids to take charge of their tasks and responsibilities with our easy-to-use task management app. Say goodbye to the hassle of managing household chores and hello to a more productive and rewarding family life.</p>
        <div className="ftm__header-content__input">
          <input type="email" placeholder="Your email address"></input>          
          <button type="button">Get Started</button>
        </div>
        <div className='ftm__header-content__people'>
          <img src={people} alt="people"></img>
          <p>Join millions of parents who have transformed their households with our gamified task management system!</p>
        </div> 
      </div>      
      <div className="ftm__header-image">
        <img src={mascot} alt="mascot"></img>
      </div>      
    </div>
  )
}

export default Header