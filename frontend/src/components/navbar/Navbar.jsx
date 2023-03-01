import React from 'react';
import { RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#child'>Child</a></p>
          <p><a href='#tasks'>Tasks</a></p>
          <p><a href='#rewards'>Rewards</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar