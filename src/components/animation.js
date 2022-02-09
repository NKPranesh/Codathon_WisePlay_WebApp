import React from "react";

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
        id="Animation"
        src="building_sunset_copy/index.html"
        height="650px"
        width="1000px"
      ></iframe>
      <button onClick={animate}>Click</button>
    </div>
  );
};

export default animation;
