import React, { useRef, useEffect, useState } from 'react';
import './register.css';
import axios from '../../api/axios';
import { useNavigate, useLocation } from 'react-router-dom';


const REGISTER_URL = '/dj-rest-auth/registration/'

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/login";
  const userRef = useRef();
  const [formData, setFormData] = useState({
    username: '',  
    email: '',  
    password1: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const [ username, setUser ] =  useState('');
  const [ email, setEmail ] =  useState('');
  const [ password1, setPwd1 ] =  useState('');
  const [ password2, setPwd2 ] =  useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setError('');
  }, [username, email, password1, password2])  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await axios.post(REGISTER_URL, formData,{
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });      
      console.log(response);
      navigate(from, { replace: true});
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className='ftm__register-container section__padding'>
      <h1>Register</h1>
      {error && <div>{JSON.stringify(error)}</div>}
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="username">Username:</label>
          <input type="username" ref={userRef} name="username" id="username" required value={formData.username} onChange={handleInputChange} />
       </div>     
       <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} />
       </div> 
        <div>
          <label htmlFor="password1">Password:</label>
          <input type="password" name="password1" id="password1" required value={formData.password1} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="password2">Confirm password:</label>
          <input type="password" name="password2" id="password2" required value={formData.password2} onChange={handleInputChange} />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
