import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './component/index';
import { Home, Trans } from './router/index';
import Profile from './router/profile';
import { Route as AppRoute, Routes } from 'react-router-dom';
import Login from '../component/login/login.jsx';
import Signup from '../component/signup/signup.jsx';
import './App.css';

function App() {
  const [user, setUser] = useState({
    userName: 'John Doe',
    did: 'did:example:1234567890',
  });

  return (
    <Router>
      <div className='app_container'>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <AppRoute path="/login" element={<Login />} />
          <AppRoute path="/signup" element={<Signup />} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/launch_app/transaction' element={<Trans />} />
            <Route
              path="/profile"
              element={<Profile userName={user.userName} did={user.did} />}
            />
          </Routes>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
