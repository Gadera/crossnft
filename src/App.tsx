import { useState } from 'react'
import './App.css'
import { Header, Main, Card} from './component/index'

function App() {
  return (
    <div className='container'>
     <Header />
     <Main />
     <Card />
    </div>
  )
}

export default App
