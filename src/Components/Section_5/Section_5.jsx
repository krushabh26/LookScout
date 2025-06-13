import React from "react";
import "./Section_5.css";
import rectangle1 from "../../Assets/Section_5/Rectangle 1.png";
import rectangle2 from "../../Assets/Section_5/Rectangle 2.png";
import rectangle3 from "../../Assets/Section_5/Rectangle 3.png";
import avatar1 from "../../Assets/Section_5/Avatar1.png";
import avatar2 from "../../Assets/Section_5/Avatar2.png";
import avatar3 from "../../Assets/Section_5/Avatar3.png";

export default function Section_5() {
  return (
    <div className="section_5">
      <div className="messaging5">
        <p className="bold-text-5">Latest Blog Posts</p>
        <p className="messaging-text-5 ">
          Completely synergize resource taxing relationships via premier niche
          markets. Professionally cultivate one-to-one customer service with
          robust ideas.
        </p>
      </div>
      <div className="multiple-cards">
        <div className="cards">
          <div className="card-5-content">
            <img src={rectangle1} alt="" />
            <p className="bold-5-text">
              Organize your digital assets with a new methodology here.
            </p>
            <p className="text-5">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
            <div className="profile">
              <div className="profile-picture">
                <div>
                  <img src={avatar1} alt="" />
                </div>
                <div>
                  <p className="ceoname">Andrew Miller</p>
                  <p className="designation">CEO</p>
                </div>
              </div>
              <div className="date">
                <p>25 apr</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="cards">
          <div className="card-5-content">
            <img src={rectangle2} alt="" />
            <p className="bold-5-text">
              Organize your digital assets with a new methodology here.
            </p>
            <p className="text-5">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
            <div className="profile">
              <div className="profile-picture">
                <div>
                  <img src={avatar2} alt="" />
                </div>
                <div>
                  <p className="ceoname">Andrew Miller</p>
                  <p className="designation">CEO</p>
                </div>
              </div>
              <div className="date">
                <p>25 apr</p>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="cards">
          <div className="card-5-content">
            <img src={rectangle3} alt="" />
            <p className="bold-5-text">
              Organize your digital assets with a new methodology here.
            </p>
            <p className="text-5">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
            <div className="profile">
              <div className="profile-picture">
                <div>
                  <img src={avatar3} alt="" />
                </div>
                <div>
                  <p className="ceoname">Andrew Miller</p>
                  <p className="designation">CEO</p>
                </div>
              </div>
              <div className="date">
                <p>25 apr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
