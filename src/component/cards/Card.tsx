import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div className='card_container'>
        <div className='card_text_wrapper'>
       <p className="card_top">OWNERSHIP</p>
       <h2 className="card_header">Decentralized Identity</h2>
        <p className="card_text">Lorem Ipsum is simply dummy text of 
                             the printing and typesetting <br />industry.
         Lorem Ipsum has been the industry's standard dummy text</p>
         </div>
        <div className="main_card">
            <div className="card_card">
                <div className="card_img_wrapper">
                <img src="/nft.png" alt="" className="card_img" />
                </div>
               <h3 className="card_text_header">Card Heading</h3>
               <p className="card_img_text">Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            </div>
            <div className="card_card">
                <div className="card_img_wrapper">
                <img src="/nft.png" alt="" className="card_img" />
                </div>
               <h3 className="card_text_header">Card Heading</h3>
               <p className="card_img_text">Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            </div>
            <div className="card_card">
                <div className="card_img_wrapper">
                <img src="/nft.png" alt="" className="card_img" />
                </div>
               <h3 className="card_text_header">Card Heading</h3>
               <p className="card_img_text">Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            </div>
        </div>
 </div>
  )
}
export  default Card