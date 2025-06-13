import React from "react";
import "./Section_7.css";
import checkbox from "../../Assets/Section_7/Checkbox Base.png";

const Section_7 = () => {
  return (
    <section className="section_7">
      <p className="tagline">1% OF THE INDUSTRY</p>
      <h2>
        Welcome to your new digital reality that will rock
        <br />
        your world truly at all throughout.
      </h2>

      <form className="section-7-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Submit</button>
      </form>

      <div className="section-benefits">
        <div className="benefit">
          <img src={checkbox} alt=" " />
          <p> Fully Secure</p>
        </div>
        <div className="benefit">
          <img src={checkbox} alt=" " />
          <p> 24 / 7 Support</p>
        </div>
        <div className="benefit">
          <img src={checkbox} alt=" " />
          <p> Done Deal</p>
        </div>
      </div>
    </section>
  );
};

export default Section_7;
