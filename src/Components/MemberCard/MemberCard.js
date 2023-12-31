import React from "react";
import "./MemberCard.css";
import jsonData from "../../Assets/exec.json";

function MemberCard(props) {
  const name = props.name;
  const position = props.position;
  return (
    <div className="member">
      <div className="member-image">
        <div className="member-name">
          <h2>{name}</h2>
          <h3>{position}</h3>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
