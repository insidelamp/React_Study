import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

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

Btn.propTypes = {
  text: PropTypes.number,
};

/*

import PropTypes from "prop-types";
임포트로 프롭타입스를 해주고 연결해준다면

props 타입을 확인해볼수있다

Btn.propTypes = {
  text: PropTypes.number,
};

콘솔에서 확인을한다면

react-jsx-dev-runtime.development.js:117 Warning: Failed prop type: Invalid prop `text` of type `string` supplied to `Btn`, expected `number`.
    at Btn (http://localhost:3000/main.2929be5c902467f6570d.hot-update.js:35:5)
    at App (http://localhost:3000/main.2929be5c902467f6570d.hot-update.js:61:64)

이거와 같은 문구를 볼수있는데 text의 타입은 스트링이고 넘버인지 확인을 하느 문구이다

사용해보고싶다면 
https://ko.reactjs.org/docs/typechecking-with-proptypes.html
확인하자!
*/
