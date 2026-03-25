import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './pages/Login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Body from './Components/Body';
import Signup from './pages/Signup'
import Profile from './pages/Profile';
import TripDetails from './Components/TripDetails';
import CreateTrip from './pages/CreateTrip';

function App() {
  return (
    <div className="App">
     <BrowserRouter basename='/'>
     <Routes>
     <Route path="/trip/:id" element={<TripDetails />} />
     <Route path="/" element={<Body/>}></Route>
     <Route path="/profile" element={<Profile/>}></Route>
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/create-trip" element={<CreateTrip />} />
       </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;