import './App.css';
import { Routes, Route, Link, Navigate} from "react-router-dom";
import { Footer, Header, Dashboard, Brand } from './containers';
import { Task, Navbar, Children, Badge, Login, Register,Reward, Layout, RequireAuth, PersistLogin } from './components';

const App = () => {  
  return (      
    <div className='App'>      
      <div className='gradient__bg'>                        
        <Navbar />  
        <Routes>            
          <Route path="/" element={<Layout />}>
            {/* public routes */}          
            <Route path='/' element={<Header />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={ <Register />} />

            {/* private routes */}
            <Route element={<PersistLogin />}>
              <Route element={<RequireAuth />}>
                <Route path='/children' element={ <Children />} />
                <Route path='/task' element={ <Task />} />
                <Route path='/reward' element={ <Reward />} />
                <Route path='/badge' element={ <Badge />} />
              </Route>
            </Route>
          </Route>
          {/* catch all */}                                       
        </Routes>          
        </div>     
        <Brand />     
      <Footer />
        </div>    
  )
}

export default App
