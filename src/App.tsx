import { useState } from 'react'
import './App.css'
import { Header, Main, Card, Desc, Showcase, Security, Work, Cta, Footer } from './component/index'

function App() {
  return (
    <div className='container'>
     <Header />
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

export default App
