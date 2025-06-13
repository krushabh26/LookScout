import React from "react";
import "./Section_4.css";
import lookscoutlogo from "../../Assets/Section_4/Lookscout.png";
import avatar from "../../Assets/Section_4/Avatar.png";
export default function Secton_4() {
  return (
    <div className="section_4">
      <div className="info1">
        <img src={lookscoutlogo} alt="" />
        <p>
          Thank you for making it painless, pleasant and most of all hassle
          free! I love LookScout. I can't say enough about LookScout. Great job,
          I will definitely be ordering again!
        </p>
        <div className="avatar">
          <div>
            <img src={avatar} alt="" />
          </div>
          <div>
            <p className="ceoname">Lisa Smith</p>
            <p className="designation">CEO Company</p>
          </div>
        </div>
      </div>
    </div>
  );
}
