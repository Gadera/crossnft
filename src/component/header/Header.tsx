import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header_container'>
        <h2 className='header_text'><a href="#home">CrossNFTL Lab</a></h2>
        <ul className='list_container'>
            <li className='list'>
                <button className='list_btn'><a href="#home" className='list_link'>Home</a></button>
            </li>
            <li className='list'>
                <button className='list_btn'><a href="#home" className='list_link'>Contact</a></button>
            </li>
            <li className='list'>
                <button className='list_btn'><a href="#home" className='list_link'>Support</a></button>
            </li>
        </ul>
    </div>
  )
}

export default Header