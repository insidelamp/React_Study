import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function Btn({ text, changeValue }) {
  return (
    <button
      onClick={changeValue}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
        fontSize: 16,
      }}
    >
      {text}
    </button>
  );
}
const MemorizedBtn = React.memo();
function App() {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => setValue("Revert Changes");
  return (
    <div>
      <Btn text={value} changeValue={changeValue} />
      <Btn text="Continue" />
    </div>
  );
}

export default App;

/*

<Btn text={value} onClick={changeValue} /> 

이곳에다가 온클릭 이벤트를 줄시 이벤트는 동작을안하고 props의 이름과 값이전달된다
<Btn /> 이 부분은  Btn컴포넌트로 이동되는 부분이라서 이다
이벤트를 주거나 스타일등을 주려면 return 부분에 넣어줘야한다
위 부분에 onClick으로 넣은 이름과 값은 실제 HTML에 적용이안된다

props가 변경되지 않는 한에서 컴포넌트를 다시 그릴지 말지를 결정할수있다

React.memo 기능 ( 리렌더링을 막아서 화면의 느려지는 원인을 최적활할수도있다고함 )
               (조만간 사용해볼일은 없다고함)
React.memo 는

리액트는 먼저 컴퍼넌트를 렌더링 한뒤 이전 렌더된 결과와 비교하여 DOM 업데이트를 경정한다
만약 렌더 결과가 이전과 다르다면 리액트는 돔을 업데이트하고 결과가 같다면 리렌더링 되지않는다

컴퍼넌트가 React.memo()로 래핑 될 때, React는 컴퍼넌트를 렌더링하고 결과를 메모이징(Memoizing)한다.
 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.
*/
