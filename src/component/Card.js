import React from "react";
import "./Card.css";

const Card = ({ title, subtitle, description }) => {
  return (
    <>
      <div className="card">
        <div class="icons-contain">
          <i class="fas fa-truck icons"></i>
        </div>
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
