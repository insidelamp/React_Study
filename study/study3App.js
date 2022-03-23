import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [amonunt, setAmount] = React.useState();
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);
  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={flipped ? amonunt * 60 : amonunt}
          onChange={onChange}
          id="minutes"
          placeholder="Minutes"
          type="number"
          disabled={flipped === true}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={flipped ? amonunt : Math.round(amonunt / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={flipped === false}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flipp</button>
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

// input 에 벨류를 넣어서 minutes 를 넣어준이유는 input 값을 외부에서도 수정해주기 위해서임
// Math.round 를 활용해서 반올림을 해준다
// 밑에 수는 온체인지 이벤트가 연결이 안되있기때문에 가져오는 수에 변화는 못준다

/*
function App() {
  const [minutes, setMinutes] = React.useState();
  const [flipped, setFlipped] = React.useState(false);
  const onChange = (event) => {
    setMinutes(event.target.value);
  };

  const reset = () => setMinutes(0);
  const onFlip = () => setFlipped((current) => !current);
  return (
    <div>
      <h1 className="hi">Super Converter</h1>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          value={minutes}
          onChange={onChange}
          id="minutes"
          placeholder="Minutes"
          type="number"
          disabled={flipped === true}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          value={Math.round(minutes / 60)}
          id="hours"
          placeholder="Hours"
          type="number"
          disabled={flipped === false}
          onChange={onChange}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>Flipp</button>
    </div>
  );
}





const [flipped, setFlipped] = React.useState(false);     flipped는 단순히 true 혹은 false의 변수다
<button onClick={onFlip}>Flipp</button>                  우리가 flip 버튼을 누르면 onFlip가 실행되는데
const onFlip = () => setFlipped((current) => !current);  onFlip 함수는 현자겂을 받아서 그 반대의 값을 내놓는다
disabled={flipped === false}                            minutes 버튼에 숨김처리 기능에 조건문을 달아  위 onFlip 을 클릭시 변하게 해준다
disabled={flipped === true}                            hours 버튼에 숨김처리 기능에 조건문을 달아 위 onFlip 을 클릭시 변하게 해준다

minutes에 숫자를 사용했을때 hours에 계산된값이 나오게된다
하지만 hours 에 계산을 넣지않을때 작동이 되지않는데
onClick 함수를 적용을 안시켜서그런다
이렇게되면 문제가 하나발생하는데 onclick을 입혔을경우 작동은하지만   value={Math.round(minutes / 60)} 이 문단이 계산되서 작동을한다
내가 minutes에 글을 썻을때만 위의 vale 단위변환이 이어나야한다 하지만 hours 에 값을 입력할떄는  그냥 입력한 값 그대로 보여줘야한다
마찬가지로 hours 에 입력한값이 계산되어 단위변환이 이루어진 값이 전달되야한다

그래서 이부분을 삼향연산자를 이용하여  바꿔보자
value={flipped ? amonunt * 60 : amonunt}      벨류값이 flipped 일경우 amonunt에 곱하기 60을 해준 값을 보여주고 flipped가 아니라면 amount 를 보여줘라
value={flipped ? amonunt : Math.round(amonunt / 60)}  벨류값이 flipped 라면 amonunt 를 보여주고 아니라면 amonunt 를 60으로 나누고 반올림한 값을 보여줘라

위의 코드를 작동할시 문제가 하나더 있는데
플립을 누를경우 입력값에서 변하는게아닌 현재값을 넘겨주게되어 문제가된다
이 문제를 해결하기위해 

기존
const onFlip = () => setFlipped((current) => !current);

이 코드에서 초기화를 넣어 플립으로 변화를 누를시에 reset함수를 실행시켜 값을 초기화해주게 바꿈

const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };


*/
