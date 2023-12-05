import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div className='card_container'>
        <div className='card_text_wrapper'>
       <p className="card_top">OWNERSHIP</p>
       <h2 className="card_header">NFT Marketplace</h2>
        <p className="card_text">Explore, buy, sell and trade cross-chain NFTS-<br />Your gateway to the ultimate NFT experience</p>
         </div>
        <div className="main_card">
            <div className="card_card">
                <div className="card_img_wrapper">
                <img src="/nft.png" alt="" className="card_img" />
                </div>
               <h3 className="card_text_header">Blind monkey</h3>
               <p className="card_img_text">0.003ETH <b className='bold'> 1/10</b></p>
               <button className="card_link"><a href="">Place a bid</a>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" 
               height="20" viewBox="0 0 20 20" fill="none" className='card_svg'>
  <path d="M12.0248 4.31669C12.1831 4.31669 12.3415 4.37502 12.4665 4.50002L17.5248 9.55836C17.7665 9.80002 17.7665 
    10.2 17.5248 10.4417L12.4665 15.5C12.2248 15.7417 11.8248 15.7417 11.5831 15.5C11.3415 15.2584 
    11.3415 14.8584 11.5831 14.6167L16.1998 10L11.5831 5.38336C11.3415 5.14169 11.3415 4.74169 11.5831 4.50002C11.6998 
    4.37502 11.8665 4.31669 12.0248 4.31669Z" fill="#704EF4"/>
  <path d="M2.9169 9.375L16.9419 9.375C17.2836 9.375 17.5669 9.65833 17.5669 10C17.5669 10.3417 17.2836 10.625 16.9419 
    10.625L2.91689 10.625C2.57523 10.625 2.29189 
    10.3417 2.29189 10C2.29189 9.65833 2.57523 9.375 2.9169 9.375Z" fill="#704EF4"/>
</svg>
</button>
            </div>
            <div className="card_card">
                <div className="card_img_wrapper">
                <img src="/Hoddie.png" alt="" className="card_img" />
                </div>
                <h3 className="card_text_header">Masked runnery</h3>
               <p className="card_img_text">0.1ETH <b className='bold'>1/5</b></p>
               <button className="card_link"><a href="">Place a bid</a>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" 
               height="20" viewBox="0 0 20 20" fill="none" className='card_svg'>
  <path d="M12.0248 4.31669C12.1831 4.31669 12.3415 4.37502 12.4665 4.50002L17.5248 9.55836C17.7665 9.80002 17.7665 
    10.2 17.5248 10.4417L12.4665 15.5C12.2248 15.7417 11.8248 15.7417 11.5831 15.5C11.3415 15.2584 
    11.3415 14.8584 11.5831 14.6167L16.1998 10L11.5831 5.38336C11.3415 5.14169 11.3415 4.74169 11.5831 4.50002C11.6998 
    4.37502 11.8665 4.31669 12.0248 4.31669Z" fill="#704EF4"/>
  <path d="M2.9169 9.375L16.9419 9.375C17.2836 9.375 17.5669 9.65833 17.5669 10C17.5669 10.3417 17.2836 10.625 16.9419 
    10.625L2.91689 10.625C2.57523 10.625 2.29189 
    10.3417 2.29189 10C2.29189 9.65833 2.57523 9.375 2.9169 9.375Z" fill="#704EF4"/>
</svg>
</button>
            </div>
            <div className="card_card">
                <div className="card_img_wrapper">
                <img src="/Baby.png" alt="" className="card_img" />
                </div>
                <h3 className="card_text_header">Cool bear</h3>
               <p className="card_img_text">0.01ETH <b className='bold'> 2/15</b></p>
               <button className="card_link"><a href="">Place a bid</a>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" 
               height="20" viewBox="0 0 20 20" fill="none" className='card_svg'>
  <path d="M12.0248 4.31669C12.1831 4.31669 12.3415 4.37502 12.4665 4.50002L17.5248 9.55836C17.7665 9.80002 17.7665 
    10.2 17.5248 10.4417L12.4665 15.5C12.2248 15.7417 11.8248 15.7417 11.5831 15.5C11.3415 15.2584 
    11.3415 14.8584 11.5831 14.6167L16.1998 10L11.5831 5.38336C11.3415 5.14169 11.3415 4.74169 11.5831 4.50002C11.6998 
    4.37502 11.8665 4.31669 12.0248 4.31669Z" fill="#704EF4"/>
  <path d="M2.9169 9.375L16.9419 9.375C17.2836 9.375 17.5669 9.65833 17.5669 10C17.5669 10.3417 17.2836 10.625 16.9419 
    10.625L2.91689 10.625C2.57523 10.625 2.29189 
    10.3417 2.29189 10C2.29189 9.65833 2.57523 9.375 2.9169 9.375Z" fill="#704EF4"/>
</svg>
</button>
            </div>
        </div>
 </div>
  )
}
export  default Card