import React from 'react';
import './login.css';
import mascot from '../../assets/FTM_Mascot_New.png'

const Login = () => {
  return (
    <div className='ftm__login'>
      <div className='ftm__login-hero_image'>
        <img src={mascot} />
      </div>      
    </div>
  )
}

export default Login