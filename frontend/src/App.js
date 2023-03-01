import React from 'react'

import { Footer, Header, Dashboard } from './containers';
import { Task, Navbar, Badge, Login } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>      
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Login />
      </div>
      <Task />    
      <Footer />      
    </div>
  )
}

export default App
