import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <h1>Hello</h1>
        </Route>
        <Route path="/movie">
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

import에 BrowserRouter 과 HashRouter 이있다

Hash Router   = > www.your-domain.com/#/path/1
1. 주소에 해쉬(#) 가 붙는다
2. 검색엔진이 읽지 못한다
3. 별도의 서버 설정을 하지않더라도 새로고침 시 오류가 발생하지않는다

해쉬라우터 검색엔진 최적화가 지원되지 않기 때문에 사용하지않는것이 좋다
그럼에도 불구하고 Hasy 를 쓴이유는 경로 찾기 문제때문이다

Browser Router => http://lampsky.shop/about/0
1. History API 를 사용한다
2. 별도의 서버 설정을 하지 않으면 새로고침 시 404 에러가 발생한다


Browser Router 에서는 새로고침과 리디렉션 404 에러를 해결할수 있는 방법이 없는것일까?
그것은 아니다 앞서 언급했듯이 서버에서 별도의 설정을 하면된다
정적페이지 배포에 자주쓰이는 netlify 로 서버성을 하면된다
리액트 프로젝트의 public폴더에 netify.toml이라는 파일을 생성한뒤 다음과 같은 코드를 입력한다

[[redirects]]   
  from = "/*"   
  to = "/index.html"   
  status = 200

이렇게 작성하면 netlify 서버에서 다른 path로 들어온 모든 요청에 대해 index.html로 리디렉션 해준다. 
따라서 Browser Router를 사용하더라도 새로고침과 리디렉션 시 우리가 원하는 entry point로 진입하고 
React Router가 path를 읽어드려 우리가 원하던 페이지를 렌더링 할 수 있게 된다.

라우터 안에 path="/" 요렇게 사용하면 원하는 지점으로 이동할수있다
*/
