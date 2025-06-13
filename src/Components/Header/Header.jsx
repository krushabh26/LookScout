import React, { useState } from "react";
import "./Header.css";
import headerphoto from "../../Assets/Navbar/header_photo.png";
import gitlab from "../../Assets/Navbar/gitlab_logo.png";
import slack from "../../Assets/Navbar/Slack_Logo.png";
import netflix from "../../Assets/Navbar/netflix_Logo.png";
import paypal from "../../Assets/Navbar/Paypal_Logo.png";
import lookscout from "../../Assets/Navbar/Lookscout_logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNotifyClick = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("You have been notified!");
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("You have been notified!");
          }
        });
      }
    } else {
      alert("This browser does not support desktop notification");
    }
  };

  return (
    // Header Section
    <>
      <header className="header">
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">
            <img src={lookscout} alt="Lookscout" />
          </div>
          <div className={`nav-list ${menuOpen ? "open" : ""}`}>
            <nav>
              <ul className="list">
                <li>Home</li>
                <li>Our Products</li>
                <li>
                  Resources <i className="fa-solid fa-angle-down"></i>
                </li>
                <li>Contacts</li>
              </ul>
            </nav>
          </div>
          <div className="register">
            <div>
              <button>Log in</button>
            </div>
            <div>
              <button className="signup">Sign up</button>
            </div>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "change" : ""}`}></div>
            <div className={`bar ${menuOpen ? "change" : ""}`}></div>
            <div className={`bar ${menuOpen ? "change" : ""}`}></div>
          </div>
        </div>
        <hr style={{ color: "#638df7" }} />
        {/*Starting Page */}
        <div className="info">
          <div className="text_section">
            <div className="heading">
              <p>
                Your Supercharged <br />
                Design Workflow
              </p>
            </div>
            <div className="para">
              <p>
                We've been told it is not possible to overachieve our customer's{" "}
                <br />
                expectations. We have not reinvented the wheel, we decided to
                build <br />
                upon it.
              </p>
            </div>
            <div className="notify">
              <button onClick={handleNotifyClick}>Send Notification</button>
            </div>
            <div className="supports">
              <p>Who supports us</p>
              <div className="support_list">
                <img src={gitlab} alt="" />
                <img src={slack} alt="" />
                <img src={netflix} alt="" />
                <img src={paypal} alt="" />
              </div>
            </div>
          </div>
          <div className="photo_section">
            <img src={headerphoto} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
