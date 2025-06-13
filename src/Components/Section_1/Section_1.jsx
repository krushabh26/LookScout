import React from "react";
import "./Section_1.css";
import icon1 from "../../Assets/Section_1/Icon placeholder.png";
import icon2 from "../../Assets/Section_1/Icon placeholderr_1.png";
import icon3 from "../../Assets/Section_1/Icon placeholder _2.png";
import icon4 from "../../Assets/Section_1/Icon placeholder _3.png";
import icon5 from "../../Assets/Section_1/Icon placeholder _4.png";
import icon6 from "../../Assets/Section_1/Icon placeholder _5.png";

const Section_1 = () => {
  return (
    <>
      <div className="section_1">
        <div className="messaging">
          <p className="bold-text">Messaging for all</p>
          <p className="messaging-text">
            User generated content in real-time will have multiple touchpoints
            for offshoring
          </p>
        </div>
        <div className="card">
          <div className="card-content">
            <img src={icon1} alt="" />
            <p className="card-bold-text">Easier Work Organisation</p>
            <p className="card-text">
              Efficiently unlesh cross-media information without cross-media
              value. Quickly timely deliverables for real-time schemas.{" "}
            </p>
            <button className="card-button">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="card-content">
            <img src={icon2} alt="" />
            <p className="card-bold-text">Fast Connection</p>
            <p className="card-text">
              Completely pursue scalable customer cross-media through
              potentilites. Holistically quickly installed portals{" "}
            </p>
            <button className="card-button">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>{" "}
          <div className="card-content">
            <img src={icon3} alt="" />
            <p className="card-bold-text">Streamlined Processes</p>
            <p className="card-text">
              Objectively innovate empowered scalable manufactured products
              whereas parallel platforms predominate extensible.{" "}
            </p>
            <button className="card-button">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>{" "}
          <div className="card-content">
            <img src={icon4} alt="" />
            <p className="card-bold-text">Easier Integrations</p>
            <p className="card-text">
              Completely pursue scalable customer try through potentialities.
              Pontificate portals installed. Effciently unleash information{" "}
            </p>
            <button className="card-button">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>{" "}
          <div className="card-content">
            <img src={icon5} alt="" />
            <p className="card-bold-text">Marketing Analytics</p>
            <p className="card-text">
              Phosfluorenscently engage wolrdwide methodologies with web-enabled
              interactively coordinate{" "}
            </p>
            <button className="card-button">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>{" "}
          <div className="card-content">
            <img src={icon6} alt="" />
            <p className="card-bold-text">Workflow Builder</p>
            <p className="card-text">
              Collabratively administrate turnkey service channels whereas
              virtual e-tailers. This is objecvtively scalable metrics whereas.{" "}
            </p>
            <button className="card-button">
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section_1;
