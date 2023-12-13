import React from 'react';

import { Main, Card, Desc, Showcase, Security, Work, Cta, Footer} from '../component';
import '../App.css'
import LoginPage from '../component/login/login';
import Signup from '../component/signup/signup';
// import LoginSignup from '../component/LoginSignup/LoginSignup'
const Home = () => {
  return (
    <div className='home_container'>
        <Main />
        <LoginPage/>
        <Signup/>
        <Card />
        <Desc />
        <Showcase />
        <Security />
        <Work />
        <Cta />
        <Footer />
    </div>
    
  )
}

export default Home;