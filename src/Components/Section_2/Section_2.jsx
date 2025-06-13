import React from "react";
import "./Secton_2.css";
import icon_1 from "../../Assets/Section_2/Icon placeholder.png";
import icon_2 from "../../Assets/Section_2/Icon placeholder 1.png";
import icon_3 from "../../Assets/Section_2/Icon placeholder 2.png";
import photo from "../../Assets/Section_2/Right.png";

export default function Section_2() {
  return (
    <div className="section_2">
      <div className="messaging">
        <p className="bold1-text">Redefining Product Features</p>
        <p className="messaging-text">
          Keep your eye on the ball while performing a deep dive on the start-up
          mentality to derive convergence on cross-platfrom integration
        </p>
      </div>
      <div className="content">
<div className="left">
        <div className="card1-content">
          <div className="card-1">
            <div className="card-icon">
              <img src={icon_1} alt="" />
            </div>
            <div>
              <p className="bold-1-text">Explore ideas together</p>
              <p className="card-1-text">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <button className="card-icon-button">
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          <div className="card-1">
            <div className="card-icon">
              <img src={icon_2} alt="" />
            </div>
            <div>
              <p className="bold-1-text">Bring those ideas to life</p>
              <p className="card-1-text">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <button className="card-icon-button">
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>{" "}
          <div className="card-1">
            <div className="card-icon">
              <img src={icon_3} alt="" />
            </div>
            <div>
              <p className="bold-1-text">Ship better outcomes</p>
              <p className="card-1-text">
                Engage audience segments and finally create actionable insights.
                Amplify vertical integration.
              </p>
              <button className="card-icon-button">
                Learn more <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={photo} alt="" />
      </div>
      </div>
      
    </div>
  );
}
