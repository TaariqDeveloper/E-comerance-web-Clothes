import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pinterest_iocn from "../Assets/pintester_icon.png";
import whatsup_icon from "../Assets/whatsapp_icon.png";
function Footer() {
  return (
    <div className="footer">
      <div className="footerLogo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <ul className="footer_links">
        <li>Company</li>
        <li>products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contect</li>
      </ul>

      <div className="footer-section-icons">
        <div className="footer-Icons-container">
          <img src={instagram_icon} alt="" />
        </div>

        <div className="footer-Icons-container">
          <img src={pinterest_iocn} alt="" />
        </div>

        <div className="footer-Icons-container">
          <img src={whatsup_icon} alt="" />
        </div>
      </div>

      <div className="footer-coppy-wright">
        <hr />
        <p>copyright @2025 All Right Reserved </p>
      </div>
    </div>
  );
}

export default Footer;
