import { useState } from 'react'
import './App.css'
import { Header, Main, Card, Desc, Showcase, Security} from './component/index'

function App() {
  return (
    <div className='container'>
     <Header />
     <Main />
     <Card />
     <Desc />
     <Showcase />
     <Security />
    </div>
  )
}

export default App
