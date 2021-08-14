import React from "react";
import "./LandingPage.css";
import mainimg from "./images/logistics-animate.svg";
const LandingPage = () => {
  return (
    <>
      <section>
        <div className="main-body">
          <div className="hero-section">
            <div class="main-text">
              <h2 class="hero-text">
                Welcome to
                <br />
                <span>CS Group</span>
              </h2>
             <div className="hero-btn">
             <a href="">Contact US</a>  
             </div>
            </div>

            <div class="hero-img-div">
              <img src={mainimg} class="hero-image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
