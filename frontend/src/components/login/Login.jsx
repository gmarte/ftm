import React, { useRef, useEffect, useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './login.css';
import useAuth from '../../hooks/useAuth';


import axios from '../../api/axios';
const LOGIN_URL = '/dj-rest-auth/login/';

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const userRef = useRef();
  const errRef = useRef();
  
  const [ username, setUser ] =  useState('');
  const [ password, setPwd ] =  useState('');
  const [ errMsg, setErrMsg] = useState('');  

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(username,password);

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ username, password }),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
            console.log(JSON.stringify(response?.data));            
            const access_token = response?.data?.access_token;
            const refresh_token = response?.data?.refresh_token;
            // const roles = response?.data?.roles;            
            setAuth({ username, password, access_token, refresh_token });
            setUser('');
            setPwd('');
            navigate(from, { replace: true});
        } catch (err) {
            console.log(err);
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
  }

  return (   
    <div className="ftm__login section__padding">      
        <div className='ftm__login-container'>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              id='username'
              onChange={(e) => setUser(e.target.value)}
              value={username}
              type="text"
              ref={userRef}              
              name={'username'}
              required
              />
          </div>
          <div>
          <label htmlFor='password'>Password:</label>
            <input
              onChange={(e) => setPwd(e.target.value)}
              value={password}              
              type="password"
              id="password"
              name={'password'}
              required
            />
          </div>
          <button type={'submit'}>Sign in</button>
          <p>
            Need an Account? <br />
            <span className='line'>
              <Link to="/register">Sign up</Link>
            </span>
          </p>
          <div className="ftm__login-social section__padding">
            <div>
              <FcGoogle />
            </div>
            <div>
              <FaTwitter />
            </div>
              <div><FaFacebookSquare />
            </div>
          </div>
        </form>
        </div>      
    </div>   
  );
}

export default Login