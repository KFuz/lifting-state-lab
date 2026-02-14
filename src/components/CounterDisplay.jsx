import "./counter.css";
import { useState } from "react";

function CounterDisplay(props) {

  return (
    <div className="counter-display">
      <p className="counter-label">Current Count</p>
      <h2 className="counter-value">{props.count}</h2>
    </div>
  );
}

export default CounterDisplay;
