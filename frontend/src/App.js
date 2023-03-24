import './App.css';
import { Routes, Route} from "react-router-dom";
import { Footer, Header, Brand } from './containers';
import { AuthProvider } from './context/AuthProvider';
import { Task, Navbar, Children, Badge, Login, Register,Reward, Layout, RequireAuth, PersistLogin } from './components';

const App = () => {  
  return (      
    // <AuthProvider>
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
            <Route element={<PersistLogin  />}>            
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
        <Brand />     
      <Footer />        
        </div>           
        // </div>
        // </AuthProvider>
  )
}

export default App
