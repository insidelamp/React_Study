import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

/*
store 는 나의 data를 넣는곳이다 state

state는 나의 application 에서 바뀌는 data를 말한다 
현재는 유일하게 바뀌는 코드가 번임

나머지는 count 를 modify(수정)하기 위함임 ( plus1 , minus1)

const updateText = () => {
  number.innerText = count;
};

이 부분은 html 에게 count 를 업데이트하라고 알려주는거임


리덕스는 나의 data를 관리해주는것을 도와주는 역할을 하기위해 만들어짐

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

이 두 코드의 케이스는 redux가 -1이나 +1을 cunt하는걸 도와주기위해 만들어진것임

우리는 데이터 어느곳에 그걸 넣어줘야함 
*/
