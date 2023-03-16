import React, { useState } from 'react';
import './register.css';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',  
    email: '',  
    password1: '',
    password2: '',
  });
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await axios.post('http://localhost:8000/dj-rest-auth/registration/', formData);
      console.log(response);
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="username">Username:</label>
          <input type="username" name="username" id="username" required value={formData.username} onChange={handleInputChange} />
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
