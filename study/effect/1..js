import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
/*

위 코드를  useEffect 를  사용안한다고 가정해보자
한번 무언가를 작성할떄마다 11번째 콘솔이 계속 호출될것이다
이를 보완하기위해 15번째 줄처럼 useEffect를 사용하여 한번만 돌아가도록 해줄수있다

 useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);

 우리가 리액트 js에게 이 keyword를 지켜봐 라고 지정해주는곳임
 keyword 가 변화할떄 코드가 항상 실행됨
 이 코드(keyword)가 변화할때 코드를 실행할거라고 리액트js에 알려주는 곳임

useEffect(() => {
    console.log("CALL THE API....");
  }, []);

이 줄이 다시 실행이 되지않는건 이 화면이 새로 다시 그려지지않아서 useEffect가 작동하지않는거임
react가 지켜볼게 아무도 없으니까 처음한번만 실행됨

useEffect(() => {
    if (keyword !== "" && keyword.length > 5 ) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  키워드가 빈값이 아니고 키워드의 길이가 5보다 높다면 콘솔로 SEARCH FOR 을 보여주게 바뀌는구문

  
  이번에 배운 점은  

  언제 코드가 실행될지 경정하는 방법에 대해 배웠고
  1. component가 생성되는 첫 시작점

  useEffect(() => {
    console.log("CALL THE API....");
  }, []);

  2. 아니면 무언가 update가 될때도 코드를 실행 및 특정한 keyword 가 업데이트 될떄만 코드를 실행시킬수있음

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5 ) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);
  

useEffect는 화살표함수로 실행될시 결과값을 설정해줄수있고 
 뒤에있는 [] <- 안으로 무엇을 지정해서 어떤걸 컨트롤 할건지에 대해 사용하는것이다



 1.useEffect(() => {
    console.log("CALL THE API....");
  }, []);

2.useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

3.useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);





1번째 useEffect 는 별도의 지정이 없어 페이지가 로드될때 한번만 실행되고



2번쨰 useEffect 는 keyword에 지정이 있어  keyword부분이 있는 input에  변화가 올때마다 콘솔에 출력된다
<input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>

3번째 useEffect는 count에 지정되어있어 button 이 변화 될때마다 콘솔에 출력된다

<button onClick={onClick}>click me</button>
*/
