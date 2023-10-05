import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './page/About';
import Home from './page/Home';
import Login from './page/Login';
import Pass from './page/Pass';
import Signup from './page/Sign';
function App() {
 
  return (
    <Router>
      <div>
        <section>                              
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/setPassword' element={<Pass/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;