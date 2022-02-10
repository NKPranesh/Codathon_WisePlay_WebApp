import React from "react";
import "../stylesheets/animation.css";

const animation = () => {
  return (
    <div className="ANOuterDiv">
      <iframe
        id="HomeAnimation"
        src="home/index.html"
        height="650px"
        width="800px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default animation;
