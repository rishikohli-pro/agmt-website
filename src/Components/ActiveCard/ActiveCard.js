import React from "react";
import "./ActiveCard.css";
import jsonData from "../../Assets/exec.json";

function ActiveCard(props) {
  const name = props.name;
  const position = props.position;
  return (
    <div className="meember">
      <div className="meember-image">
        <div className="meember-name">
          <h2 className="name">{name}</h2>
          <h3 className="position">{position}</h3>
        </div>
      </div>
    </div>
  );
}

export default ActiveCard;
