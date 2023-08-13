import React from "react";
import "./WorkSection.css";

function WorkSection(props) {
  const para = props.para;

  const images1 = props.images1;
  const images2 = props.images2;
  return (
    <div className="wd">
      <div className="wdText">
        <p className="para">{para}</p>
      </div>
      <div className="wdImage">
        <img className="wd-image" src={images1} />
        <img className="wd-image" src={images2} />
      </div>
    </div>
  );
}

export default WorkSection;
