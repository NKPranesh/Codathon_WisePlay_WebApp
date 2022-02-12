import React from "react";
import "../stylesheets/options.css";

const Options = () => {

  return (
    <div className="OPMainDiv">
        <div className="OPOptions">
            <span className="OPA">
              <input type="radio" value="a" name="options" /> 2.56
            </span>
            <span className="OPB">
              <input  type="radio" value="b" name="options" /> 2.56
            </span>
            <span className="OPC">
              <input  type="radio" value="c" name="options" /> 2.56
            </span>
            <span className="OPD">
              <input type="radio" value="d" name="options" /> 2.56
            </span>
          </div>
        <div className="OPButtonDiv">
          <div>
          <button className="OPNextButton">
            Next
          </button>
          </div>
        </div>
    </div>
  );
};

export default Options;
