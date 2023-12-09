import React from 'react'
import { Main, Card, Desc, Showcase, Security, Work, Cta, Footer} from '../component/index'
import '../App.css'
const Home = () => {
  return (
    <div className='home_container'>
        <Main />
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

export default Home