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

리엑트 Router 은 동적 url을 지원해주기도한다
동적 url은 lampsky.shop 이 있고 이동해야하는 화면이 3개 있다고 생각해보자
<Route path="/">   <- 처음에 들어오면 보여주는곳
lampsky.shop         
<Route path="/about">     <- 처음 들어와서 주소에 /about를 하면 들어올수있는 페이지
lampsky.shop/about
<Route path="/about/:id"> <- /about/{0}  <- :id 붙여줘서 id를 적으면 변수를 주어 넘길수있다
: 가 중요한 포인트이다
: 없이 사용시 id 라는 텍스트로 보내겠다이고
: 사용 시 원하는값 을 변수로 받아 넘길수있다

lampsky.shop/abut/1111


*/
