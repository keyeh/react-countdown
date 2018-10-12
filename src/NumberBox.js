import React from "react";

export default props => (
  <div className="numberbox">
    <span className="number">{props.number}</span>
    <br />
    <span className="label">{props.label}</span>
  </div>
);
