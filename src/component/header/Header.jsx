import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";



const Header = () => {
    const [clicked, setClicked] = useState(false);
    const address = useAddress(); 
  
    const handleClick = () => {
      setClicked(!clicked);
    };
  
    return (
      <div className='header_container'>
        <Bounce left>
          <h2 className='header_text'>
            <Link to="/">CrossNFT Labs</Link>
          </h2>
          <ul id='list_container' className={clicked ? "list_container active" : "list_container"}>             <li className='list'>
              <button className='list_btn'><Link to="/" className='list_link'>Home</Link></button>
            </li>
            <li className='list'>
              <button className='list_btn'><Link to='/' className='list_link'>Contact</Link></button>
            </li>
            <li className='list'>
              <button className='list_btn'><Link to='/' className='list_link'>Support</Link></button>
            </li>
            <li className='list'>
              <button className='list_btn'><Link to='/profile' className='list_link'>Profile</Link></button>
            </li>
            <li>
            <ConnectWallet address={address} />
            </li>
          </ul>
        </Bounce>
        <div id='mobile' onClick={handleClick}>
          <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
  );
};

export default Header;