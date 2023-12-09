import { useState } from 'react'
import './App.css'
import {Header} from './component/index'
import {Home, Trans }from './router/index'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path='/launch_app/transaction' element={<Trans />}/>
    {/* <Footer /> */}
    </Routes>
    </>
  )
}

export default App
