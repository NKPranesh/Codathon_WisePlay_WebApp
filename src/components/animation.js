import React from "react";
import "../stylesheets/animation.css";

const animation = () => {
  let animate = () => {
    let myIframe = document.getElementById("Animation").contentWindow;
    window.addEventListener("keydown", function (evt) {
      myIframe.postMessage(
        JSON.stringify({ type: "KeyboardEvent", key: evt.key })
      );
    });
  };

  return (
    <div className="ANOuterDiv">
      <iframe
        className="HomeAnimation"
        src="home/index.html"
        height="650px"
        width="800px"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default animation;
