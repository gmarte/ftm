import React, { useRef, useEffect, useState, useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './login.css';
import AuthContext from "../../context/AuthProvider";


import axios from '../../api/axios';
const LOGIN_URL = '/dj-rest-auth/login/';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  
  const [ username, setUser ] =  useState('');
  const [ password, setPwd ] =  useState('');
  const [errMsg, setErrMsg] = useState('');
  const [ success, setSuccess ] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, password])  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,password);

    try {
      const response = await axios.post(LOGIN_URL,
          JSON.stringify({ username, password }),
          {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true
          }
      );
            console.log(JSON.stringify(response?.data));            
            const accessToken = response?.data?.access_token;
            const roles = response?.data?.roles;
            setAuth({ username, password, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
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

  // function onSubmit(e) {
  //    e.preventDefault();
  //   return fetch('http://localhost:8000/dj-rest-auth/login/', {
  //     method: 'POST',
  //     credentials: 'omit',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     },
  //     body:  JSON.stringify({username, password})
  //   }).then(resp => resp.json()).then(data => {
  //     changeResponse(data)
  //   }).catch(error => console.log('error ->', error))
  // }

  return (
    <> 
    { success ? (
      <section>
      <h1>You are logged in!</h1>
      <br />
      <p>
          <Link to="/">Go to Home</Link>
      </p>
      </section>
    )
    :(
    <div className="ftm__login">      
        <h1>
          Login
        </h1>
        <div>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        </div>
        <div className='ftm__login'>
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
              <Link to="register">Sign up</Link>
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
    )
    }
    </>
  );
}

export default Login