import { useState } from 'react'
import './App.css'
import { Header, Main, Card, Desc} from './component/index'

function App() {
  return (
    <div className='container'>
     <Header />
     <Main />
     <Card />
     <Desc />
    </div>
  )
}

export default App
