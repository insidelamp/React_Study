import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello" />
        <Route path="/abot-us">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie" />
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
/*

Detail.js 페이지

import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;

*/

/*

<Route path="/movie/:id"> 

리액트에게 위 url이 변수를 받으라고 말해주는 부분임
위 라우터가 적용되있는 페이지에가서 useParams라는 함수를 이용하여 url 변수를 받아올수있음
이 함수를 사용하면 React Router 은 바로 이 변수의 값을 넘겨준다 

async 비동기함수
await 동기함수

await 는 async 안에서만 작동하며

async 는 api통신에 연결하여 설명하면 이해가 쉽다
원하는 정보를 가져오기위해서 정보를 가져오는데 시간이 필요하다
정보를 가져오는 함수가 3개있다 생각하고 가정을 해보자

첫번쨰 코드는 api로 통신해서 정보를 가져오는데 10초가걸리고
두번째 코드는 api로 통신해서 정보를 가져오는데 3초
세번째 코드는 api로 통신해서 정보를 가져오는데 5초가 걸린다생각해보자

자바스크립트는 정보를 가져오는데 차례대로 가져온다

첫번째 코드를 가져오기위해서 10초가 걸린다면 가만히있는데
이 3개의 코드를 async로 감싸서 함수를 실행하면 
첫번쨰 코드가 작동하고 정보를 가져오는동안 다른 코드들도 차례대로 정보를 가져오게 만들수있다
다른말로 하자면 async 로 감싸지않은 3개의 정보를 불러오는데 18초가 걸린다면
async로 감싼 3개의 정보는 차례대로 가져오나 하나하나 가져오지않아 18초보다 짧게 가져올수있다

즉 async는 하나하나의 처리를 하는게아니라 동시에 처리할수있게 해주는 함수다

async 안에서 awit 를 사용할수있다

await는 await안에 있는 정보들을 차례차례 가져온다

await를 사용하려면 async 로 감싼 정보 안에서만 가능하다


*/
