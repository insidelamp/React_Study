import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [minutes, setMinutes] = React.useState();
  const onChange = (event) => {
    setMinutes(event.target.value);
  };
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <label htmlFor="minutes">Minutes</label>
      <input
        value={minutes}
        onChange={onChange}
        id="minutes"
        placeholder="Minutes"
        type="number"
      />
      <h4>You want to convert {minutes}</h4>
      <label htmlFor="hours">Hours</label>
      <input id="hours" placeholder="Hours" type="number" />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div>
//       <h1>Super Converter</h1>
//       <label for="minutes">Minutes</label>
//       <input id="minutes" placeholder="Minutes" type="number" />
//       <label for="hours">Hours</label>
//       <input id="hours" placeholder="Hours" type="number" />
//     </div>
//   );
// }

// 위와같은 방식은 html 방식임

//const [minutes,setMinutes] = React.useState(); 앞의 minutes는 setMinutes 로 변경된값임
