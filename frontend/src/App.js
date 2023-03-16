import React from 'react'

import { Footer, Header, Dashboard, Brand } from './containers';
import { Task, Navbar, Badge, Login } from './components';
import { BrowserRouter, Routes, Route, Link, Navigate} from "react-router-dom";
import './App.css';

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
    <div className='App'>      
      <div className='gradient__bg'>
        <Navbar user={user}/>                
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/login' element={ user ? <Navigate to='/' /> : <Login />} />
        </Routes>    
      </div>     
      {/* <Login />         */}
      {/* <Task />     */}
      <Brand />     
      <Footer />             
    </div>
    </BrowserRouter>
  )
}

export default App
