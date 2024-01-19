import React from "react";
import "./style.css";
import SlotM from "./Slot";
import arr from "./JSON";

function data() {}

const App = () => {
  return (
    <>
      <h1 className="heading-style">
        🎰 Welcome to
        <span
          style={{ fontWeight: "bold", backgroundColor: "rgb(216, 236, 234)" }}
        >
          Slot machine game
        </span>
        🎰
      </h1>
      {arr.map((val, index) => {
        console.log(index);
        return <SlotM key={val.id} a={val.a} b={val.b} c={val.c} />;
      })}
    </>
  );
};

export default App;
