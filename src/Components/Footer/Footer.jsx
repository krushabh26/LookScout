import React from "react";
import "./Footer.css";
import lookscout from "../../Assets/Navbar/Lookscout_logo.png";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <img src={lookscout} alt="" />
          <p className="footer-text">
            Generate outside the box thinking with the possibility to target the
            low.
          </p>
        </div>
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Community</li>
            <li>Events</li>
            <li>Help Center</li>
            <li>Partners</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Products</h4>
          <ul>
            <li>Integrations</li>
            <li>Solutions</li>
            <li>Features</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get Email Notifications</h4>
          <p className="footer-text">
            Generate outside the box thinking with the possibility to target the
            low
          </p>
          <form className="footer-form">
            <input type="email" placeholder="Enter email...." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p>© 2023 Lookscout. All Rights Reserved.</p>
        <div className="footer-icons">
          <FaFacebookF />
          <FaGoogle />
          <FaApple />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
