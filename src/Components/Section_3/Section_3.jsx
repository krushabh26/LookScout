import React from "react";
import "./Section_3.css";
import icon_1 from "../../Assets/Section_2/Icon placeholder.png";
import icon_2 from "../../Assets/Section_2/Icon placeholder 1.png";
import icon_3 from "../../Assets/Section_2/Icon placeholder 2.png";
import photo from "../../Assets/Section_3/photo1.png";

export default function Section_3() {
  return (
    <div className="section_3">
      <div className="content2">
        <div className="left1">
          <img src={photo} alt="" />
        </div>
        <div className="right">
          <div className="card2-content">
            <div className="card-2">
              <div className="card-icon">
                <img src={icon_1} alt="" />
              </div>
              <div>
                <p className="bold-2-text">Explore ideas together</p>
                <p className="card-2-text">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <button className="card-icon-button">
                  Learn more <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="card-2">
              <div className="card1-icon">
                <img src={icon_2} alt="" />
              </div>
              <div>
                <p className="bold-2-text">Bring those ideas to life</p>
                <p className="card-2-text">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <button className="card1-icon-button">
                  Learn more <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>{" "}
            <div className="card-2">
              <div className="card1-icon">
                <img src={icon_3} alt="" />
              </div>
              <div>
                <p className="bold-2-text">Ship better outcomes</p>
                <p className="card-2-text">
                  Engage audience segments and finally create actionable
                  insights. Amplify vertical integration.
                </p>
                <button className="card1-icon-button">
                  Learn more <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
