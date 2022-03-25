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
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
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
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;

/*



['there','are','you','are','how','hello!'].map()

map은 새로운 array 를 만들어주게됨

['there','are','you','are','how','hello!'].map()
위 맵을 사용하게되면 map() 가로 안에 적은 함수를 6번 실행한다고하는거임
그리고 그 함수로부터 내가 return 한 어떠한 값은 새로운 array이에 들어가게해줌

['there','are','you','are','how','hello!'].map(() => ":)")

이렇게하면 return 한 값 :) 가 6번 들어가게되어

[':)',':)',':)',':)',':)',':)'] 의 배열로 만들어주게됨

map 함수는
하나의 array에 있는 item을 내가 원하는 무엇이든지로 바꿔주는 열할을 하고 새로운 array로 return해줌

만약 
['there','are','you','are','how','hello!'].map((item) => item.toUpperCase())

를 하게되면 
['THERE','ARE','YOU','ARE','HOW','HELLO!'] 가 되어 item을 전부 대문자 로만들어줄수있음



*/
