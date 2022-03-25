import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
function Hello() {
  // function hiFn() {
  //   console.log("created ");
  //   return byFn;
  // }
  // function byFn() {
  //   console.log("bye");
  // }

  useEffect(function () {
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  }, []);

  //위 방식이 밑의 방식보다 쉽다

  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
/*

리턴안에서 자바스크립트를 실행시에는 { } <- 중괄호를 꼭 써주자

useEffect 는 Mount 를 하거나 upMount 를 하거나 unMount를 할수있다

Mount 를 할때는 화면 이 처음 그려질때 라고 생각하면되고
upMount 는 화면이 그려진 상태에서 변하는 값을 넣어 일부분만 새로 가져와서 그려주는거고
unMonut 는 Mount나 upMount 가 일어나고 다른화면으로 변화하거나 그려진 화면이 사라질때 일어난다고 생각된다

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

이부위가 화면이 시작될떄 보여주는 부분이며
현재 변수 showing를 선언하고 렌더링이 될시 변하는수 setShowing 를 선언하고 기본값으로 false를 준다
클릭하는 함수를 실행하여 클릭할시 변하는 이벤트를 집어넣고 실행값으로 prev(현재상태) 현재상태의 값이 아닌걸로 변화한다

<div>
    {showing ? <Hello /> : null}
  <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
</div>

이 부분이 현재 화면에 출력되는 곳이며
삼항연산자로 조건문을 실행하여 보여줄수있다
showing 일때는 <Hello/> 를 보여주고 아닐떄는 null을 보여준다
버튼의 변수를 만들어주고 onclick 함수를 넣어 클릭시 변화를 넣어준다
버튼안에 들어가는값은 showing 일때 Hide 아닐떄 Show를 보여주게되며


위  const [showing, setShowing] = useState(false); 이 부분에서 현재 상태를 false로 정하였기떄문에
Show를 먼저 보여주게 되고 Show버튼을 클릭하게되면  <Hello/> 의 값과 Hide의 버튼이 보여지게된다

위 방식이 잘 사용하지는 않으나 알고는 있어라 라고함




*/
