import React from "react";
import "../component/Whyus.css";
import Card from "./Card";
import company from "./images/company.svg";

const Whyus = () => {
  return (
    <>
      <section class="why">
          <div class="why-head-text">
            <h2 class="why-text head-text">Why US</h2>
          </div>
        <div className="why-head">
          <div className="why-left">
            <img class="company-img" src={company} alt="" />
          </div>

          <div className="why-right">
            <div className="features">
            <i class="fas fa-ship"></i>
              <h2>15 Years of Experience</h2>
              <p></p>
            </div>
            <div className="features">
            <i class="fas fa-truck"></i>
              <h2>150+ Clients</h2>
              <p></p>
            </div>
            <div className="features">
               <i class="fas fa-book"></i>
              <h2>100+ Teams</h2>
              <p></p>
            </div>
            <div className="features">
               <i class="fas fa-plane"></i>
              <h2>Global Coverage</h2>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Whyus;
