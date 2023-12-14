import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
const Header = () => {
    const address = useAddress();
  return (
    
    <div className='header_container'>
        <Bounce left>
        <h2 className='header_text'><Link to="/">CrossNFT Labs</Link></h2>
        <ul className='list_container'>
            <li className='list'>
                <button className='list_btn'><Link to="/" className='list_link'>Home</Link></button>
            </li>
            <li className='list'>
                <button className='list_btn' ><Link to='/' className='list_link'>Contact</Link></button>
            </li>
            <li className='list'>
                <button className='list_btn'><Link to='/' className='list_link'>Support</Link></button>
            </li>
        </ul>
        <button className='header_btn'>
             <ConnectWallet className="header_btn"/>
        </button>
        </Bounce>
    </div>
    
  )
}

export default Header