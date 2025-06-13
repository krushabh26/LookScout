import React from "react";
import "./Section_6.css";

import logo1 from "../../Assets/Section_6/logo1.png";
import logo2 from "../../Assets/Section_6/logo2.png";
import logo3 from "../../Assets/Section_6/logo3.png";
import logo4 from "../../Assets/Section_6/logo4.png";
import logo5 from "../../Assets/Section_6/logo5.png";
import logo6 from "../../Assets/Section_6/logo6.png";

function Section_6() {
  return (
    <section className="logo-section">
      <h2>Proud to Be Used By</h2>
      <p>
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service for state of the
        art customer service.
      </p>
      <div className="logo-container">
        <div className="logo">
          <img src={logo1} alt="The Verge" />
        </div>
        <div className="logo">
          <img src={logo2} alt="Slack" />
        </div>
        <div className="logo">
          <img src={logo3} alt="Google" />
        </div>
        <div className="logo">
          <img src={logo4} alt="Paypal" />
        </div>
        <div className="logo">
          <img src={logo5} alt="Pinterest" />
        </div>
        <div className="logo">
          <img src={logo6} alt="Mailchimp" />
        </div>
      </div>
    </section>
  );
}

export default Section_6;
