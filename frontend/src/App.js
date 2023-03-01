import React from 'react'

import { Footer, Header, Dashboard, Brand } from './containers';
import { Task, Navbar, Badge } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>      
      <div className='gradient__bg'>
        <Navbar />
        <Header />        
      </div>
      <Brand />
      <Task />    
      <Footer />      
    </div>
  )
}

export default App
