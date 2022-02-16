import React from "react";
import "../stylesheets/animation.css";

const animation = (props) => {
  let animationPaths = [
    "Home/index.html",
    "Fighter/index.html",
    "Busstop/index.html",
    "Hotel/index.html",
    "HotelRoom/index.html",
  ];

  return (
    <div className="ANOuterDiv">
      {animationPaths.map((animationPath) => {
        let index = animationPaths.indexOf(animationPath) + 1;
        return (
          <iframe
            className={
              props.popOut === index
                ? index === 1
                  ? "Animation" + index
                  : "popInLeft Animation" + index
                : "DisplayNone"
            }
            id={"HomeAnimation" + index}
            src={animationPath}
            height="650px"
            width="800px"
            frameBorder="0"
          ></iframe>
        );
      })}
    </div>
  );
};

export default animation;
