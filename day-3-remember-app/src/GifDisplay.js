import React from "react";
import remWhite from "./img/remembrall_white.gif";
import remRed from "./img/remembrall_red.gif";

const GifDisplay = (props) => {
  const gif = props.display.length > 0 ? remRed : remWhite;
  return (
    <div className="remembrall-container">
      <img src={gif} alt={"nothing remembered"} />
      <p className="remembrall-status">
        You have {props.display.length > 0 ? "something" : "nothing"} to
        remember.
      </p>
    </div>
  );
};

export default GifDisplay;
