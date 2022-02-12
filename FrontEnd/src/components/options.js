import React from "react";
import "../stylesheets/options.css";

const Options = () => {
  let move = (className) => {
    let options = ["OPA", "OPB", "OPC", "OPD"];
    for (let i = 0; i < options.length; i++) {
      let option = document.getElementsByClassName(options[i])[0];
      if (className === options[i]) {
        option.style.transform = "translateY(-20px)";
      } else {
        option.style.transform = "translateY(0px)";
      }
    }
  };

  return (
    <div className="OPMainDiv">
      <div className="OPOptions">
        <span
          className="OPA"
          onClick={() => {
            move("OPA");
          }}
        >
          2.56
        </span>
        <span
          className="OPB"
          onClick={() => {
            move("OPB");
          }}
        >
          2.56
        </span>
        <span
          className="OPC"
          onClick={() => {
            move("OPC");
          }}
        >
          2.56
        </span>
        <span
          className="OPD"
          onClick={() => {
            move("OPD");
          }}
        >
          2.56
        </span>
      </div>
      <div className="OPButtonDiv">
        <div className="OPButtonDiv">
          <button className="OPNextButton">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Options;
