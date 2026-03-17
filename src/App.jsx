import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './pages/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
     <BrowserRouter basename='/'>
     <Routes>
     <Route path="/" element={<Body/>}></Route>
       <Route path="/login" element={<Login />} />
       </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;