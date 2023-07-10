import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsTwitter, BsGithub, BsGoogle, BsInstagram } from 'react-icons/bs'
import "../../styles/Homepage.css";

const Footer = () => {
  return (
   <div className="footer">
    <img src="/coder-img.png"/>
      <div>
      <p>Hey there! I'm Nehel Khanna, an enthusiastic web developer who loves creating captivating online experiences.</p> 
      <p className="cream">Let's connect and collaborate!</p>
      <p>Reach out to me on my social media handles below.</p>
      <p className="cream">Can't wait to chat!</p>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/nehel-khanna-a0a117210" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/nehel2942" target="_blank"><BsGithub /></a>
      <a href="https://twitter.com/nehelkhanna" target="_blank"><BsTwitter /></a>
      <a href="https://instagram.com/nehelkhanna" target="_blank"><BsInstagram /></a>
      </div>
      <h5>Copyright ©️ 2023, Nehel Khanna. All Rights Reserved.</h5>
   </div>

  );
};

export default Footer;