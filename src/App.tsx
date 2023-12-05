import { useState } from 'react'
import './App.css'
import { Header, Main, Card, Desc, Showcase} from './component/index'

function App() {
  return (
    <div className='container'>
     <Header />
     <Main />
     <Card />
     <Desc />
     <Showcase />
    </div>
  )
}

export default App
