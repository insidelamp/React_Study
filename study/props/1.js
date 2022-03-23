import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function Btn({ text, big }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: big ? 18 : 16,
      }}
    >
      {text}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn text="Save Change" big={true} />
      <Btn text="Continue" big={false} />
    </div>
  );
}

export default App;

/*

function Btn({ banana }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {banana}
    </button>
  );
}

function App() {
  return (
    <div>
      <Btn banana="Save Change" />
      <Btn banana="Continue" />
    </div>
  );
}

export default App;


*/
