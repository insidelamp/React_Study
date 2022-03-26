import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log("they are telling me to add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());

/*
내가 생각하는 리덕스

리덕스 사용의 중요한점은 몇가지있는것같다

1. 리덕스 스토어 생성 하고 실행값으로 수정되는 값 넣어주기

const countStore = createStore(countModifier);

2. 하나의 수정되는 함수만들기 ( 모든 수정은 이 함수 안에서만 일어나야함)

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    console.log("they are telling me to add one");
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
3. 수정 되는 함수에 기본값을 넣어주고 엑션을 실행할수있도록 연결하기


4. dispatch 로 action 하기 ( object로 값 넣어주기)

countStore.dispatch({ type: "ADD" });





*/
