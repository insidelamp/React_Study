import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;

/*

setTodo 는 toDo 값을 수정하는 함수고 toDo 값은 input이랑 연결되있음
toDo 값을 변경하면 input 값도 변경됨
직접적으로 toDo를 수정하지 말아야하고 수정할거면 수정하는 함수를 사용해야함 그게 setTodo임
toDo를 수정하고싶다면 수정하는 함수 setTodo를 수정해야함

const [toDos, setToDos] = useState([]); 
array를 직접적으로 수정하지 않으면서 setToDos로 array에 element를 추가하는방법은 2가지가있다

1.  setToDo(""); 

 (" ")안에 값을 직접적으로 수정하는방법


2.  setToDos((currentArray) => [toDo, ...currentArray]);  

setToDos( ) <- 소괄호 안에 함수를 집어넣어 현재상태 state 를 받아와서 변경하는방법

위의 방법은

setToDos(function(currentArray){

})
 
와 같음  밑의 방법이 길어서 위에 화살표함수를 사용하게됨
setToDos((currentArray) => [toDo, currentArray]);   요렇게 하면 효과가
setToDos는 현재상태의 값에서 현재값+ 현재상태의값을 배열로 집어넣는다를 의미한다

setToDos((currentArray) => [toDo, ...currentArray]);   요렇게하면 효과가

setToDos는 현재상태의 값에서 현재값+ currentArray 의 element를 돌려준다는 의미다

*/
