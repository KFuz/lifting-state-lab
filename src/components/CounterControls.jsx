import "./counter.css";
import { useState } from "react";

function CounterControls(props) {

  return (
    <div className="counter-controls">
      <button
        className="btn secondary"
        onClick={props.decrease}
      >
        −
      </button>

      <button
        className="btn primary"
        onClick={props.increase}
      >
        +
      </button>
    </div>
  );
}

export default CounterControls;
