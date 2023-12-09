import { useState } from 'react'
import './App.css'
import {Header, Footer} from './component/index'
import Home from './router/Home'

function App() {
  return (
    <>
     <Header />
      <Home />
    {/* <Footer /> */}
    </>
  )
}

export default App
