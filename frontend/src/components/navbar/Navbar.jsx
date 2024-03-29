import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLin, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/FTM_LOGO.png';
import { Link, useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import useAuth from '../../hooks/useAuth';

const Menu = () => (
  <>
  <p><Link to="/">Home</Link></p> 
  <p><Link to='/children'>Childen</Link></p>
  <p><Link to="/task"> Tasks</Link></p>
  <p><Link to='/reward'>Rewards</Link></p>  
  <p><Link to='/badge'>Badges</Link></p>
  </>
)


const Navbar = () => {      
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();
  const [toggleMenu, setToggleMenu] = useState(false);

  const signOut = async () => {
    await logout();
    navigate('/');
  }
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
      {
        auth?.username ? (
        <div className='ftm__navbar-sign'>
          <p>{auth?.username}</p>
          <button type='button' onClick={signOut}>Logout</button>
        </div>
        ) : (
        <div className='ftm__navbar-sign'>
          <p><Link to="login">Sign in</Link></p>
          <button type="button"><Link to="register">Sign up</Link></button>
        </div>
        )
      }                  
      <div className='ftm__navbar-menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
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