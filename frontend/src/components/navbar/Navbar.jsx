import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/FTM_LOGO.png';

const Menu = () => (
  <>
  <p><a href='#home'>Home</a></p>
  <p><a href='#chores'>Chores</a></p>
  <p><a href='#rewards'>Rewards</a></p>
  <p><a href='#children'>Childen</a></p>
  <p><a href='#badges'>Badges</a></p>
  </>
)
const Navbar = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className='ftm__navbar'>
      <div className='ftm__navbar-links'>        
        <div className='ftm__navbar-links_logo'>          
        <img src={logo} alt="logo" />
        </div>        
        <div className='ftm__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='ftm__navbar-sign'>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className='ftm__navbar-menu'>
        {toogleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToogleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToogleMenu(true)} />
        }
        {toogleMenu && (
          <div className='ftm__navbar-menu_container scale-up-center'>
            <div className='ftm__navbar-menu_container-links'>
              <Menu />
              <div className='ftm__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar