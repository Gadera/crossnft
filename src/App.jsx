import React, { useState, useEffect } from 'react';
import { Header } from './component/index';
import { Routes, Route } from 'react-router-dom'
import { Home, Trans, Login, Signin } from './router/index';
import Profile from './router/profile';

// import Login from '../component/login/Login.jsx';
// import Signup from '../component/signup/Signup.jsx'
import './App.css';

function App() {
  
  return (
      <div className='app_container'>
         <Header />
          <Routes>
            <Route path="/*" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path='/launch_app/transaction' element={<Trans />} />
            {/* <Route path="/profile" element={<Profile userName={user.userName} did={user.did} />} />*/}
          </Routes>
         
      </div>
  );
}

export default App;
