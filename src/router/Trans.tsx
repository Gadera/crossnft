import React from 'react'
import '../App.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
const Trans = () => {
  return (
    <Zoom>
    <div className='tans_container'>
       <Fade>
           <div className="trans_wrapper">
              <div className="trans_header_container">
                <h2 className="trans_header">Mint NFT</h2>

              </div>
              <section className="trans_form">
                <div className="trans_form_header">
                  <p>From</p>
                </div>
                <input type="text" className="form_child" />
              </section>
              <section className="trans_form">
                <div className="trans_form_header">
                  <p>To</p>
                </div>
                <input type="text" className="form_child" />
              </section>
              <section className="trans_form">
                {/* <div className="trans_form_header">
                  <p>From</p>
                </div> */}
                 <div className="input_wrapper">
                  <p className="input_wrapper_text">Receiver address</p>
                <input type="text" className="form_child" />
                </div>
              </section>
              <section className="trans_form">
                {/* <div className="trans_form_header">
                  <p>From</p>
                </div> */}
                <div className="input_wrapper">
                <p className="input_wrapper_text">Receiver address</p>
                <input type="text" className="form_child" />
                </div>
              </section>
              <button className="tans_btn" type='submit'>Transact</button>
           </div>
           </Fade>
    </div>
    </Zoom>
  )
}

export default Trans