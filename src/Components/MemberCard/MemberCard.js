import React from "react";
import "./MemberCard.css";

function MemberCard() {
  return (
    <div className="member">
      <div className="member-image">
        <p>img</p>
        <div className="member-name">
          <h2>Name</h2>
          <h3>Position</h3>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
