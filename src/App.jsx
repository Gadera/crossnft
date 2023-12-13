
import './App.css'
import {Header} from './component/index'
import {Home, Trans }from './router/index'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app_container'>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path='/launch_app/transaction' element={<Trans />}/>
    {/* <Footer /> */}
    </Routes>
    </div>
  )
}

export default App
