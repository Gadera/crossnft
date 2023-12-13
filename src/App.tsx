
import './App.css';
import {Header} from './component/index';
import {Home, Trans}from './router/index';
import { Route, Routes } from 'react-router-dom';
import Profile from './router/Profile';

function App() {
  return (
    <>
    <Header />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path='/launch_app/transaction' element={<Trans />}/>
     <Route path='/launch_app/my_profile' element={<Profile did="YOUR_DID_VALUE" />} />    {/* <Footer /> */}
    </Routes>
    </>
  )
}

export default App
