import React from "react";
import "./desc.css";
import Roll from "react-reveal/Roll";
import image from "../../assets/Layer 2.svg";
const Desc = () => {
  return (
    <div className="desc_container">
      <Roll left>
        <div className="desc_wrapper">
          <h3 className="desc_header">INTEROPERABILITY</h3>
          <h3 className="desc_text">Mint NFTs across multiple blockchains</h3>
          <div className="desc_other">
            Minting of NFTs has been made available; However we want you to
            create and transfer yours across multiple blockchains unlocking the
            full potentials of NFTs in a decenteralized manner
          </div>
        </div>

        <div className="decs_svg">
          <img src={image} alt="tokens tree" />
        </div>
      </Roll>
    </div>
  );
};

export default Desc;
