import React from "react";
import "./style.css";

const SlotM = (props) => {
  let x = props.a;
  let y = props.b;
  let z = props.c;
  if (x === y && y == z) {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <br />
          <h1>This is matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x}
            {y}
            {z}
          </h1>
          <h1>This is not matching.</h1>
          <hr />
        </div>
      </>
    );
  }
};

export default SlotM;
