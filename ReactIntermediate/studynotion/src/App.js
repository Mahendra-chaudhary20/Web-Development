import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="w-screen h-screen bg-red-400 flex flex-col " >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div >
       <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login"  element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Dashboard" element={
          // important hai dekh lena
          <PrivateRoute isLoggedIn={isLoggedIn}>    
                 <Dashboard  />
          </PrivateRoute>
          } />
        
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
