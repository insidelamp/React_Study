import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    // setCounter(counter + 1);
    setCounter((current) => current + 1);
  };
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

// setCounter((current) => current + 1); 사용시 변수 current 가 현재 값이되고 화살표 뒤에 적는 current +1 이 state 값이된다
//현재 state 에서 + 1 을 해주고싶다면 위와 같이 사용되면  current에 현재 count 값과 +1을 더한 값을  current에 넘겨준다

// 위의 방식에서 2가지 방법을 찾아볼수있는데

// 1. setCounter(counter + 1) <- 직접 값을 설정해주는것
// 2. setCounter((current) => current + 1);  <- 함수를 전달해 현재 state 값을 얻도록 해주는것
