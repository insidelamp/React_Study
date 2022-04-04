import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";
import Post from "./modules/post";
import Image from "./modules/image";

export const history = createBrowserHistory();
// 위의 정보와 밑의정보로 히스토리로 라우터와 연결되어 스토에어 저장됨
const rootReducer = combineReducers({
  user: User,
  post: Post,
  image: Image,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({ history: history })];
//withExtraArgument 다른인수를 넘겨주는 청크의 내장함수

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
//pocess.env.NODE_ENV 사용시 개발활경이 어느거인지 찍어줌
// 빌드해서 나온 파일에 적용시 production 이라고 찍힘
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
/*

development = 개발환경
require 을 쓰는이유 : 패키지를 가져올때
import로 안쓰고 require 를 쓰는이유
로거는 콘솔에 찍히는거임
콘솔에 이전상태 이후상태가 찍힘
리덕스안에 스토어가있는데 그 데이터에 뭐가담기는지 
어떤액션이 일어나서 이전에 뭐였는지 뭐로 변했는지 찍힘
사용자에겐 보여질필요는없으니 개발환경일때에만 보이게해줌
빌드한 프로덕션에서 import할필요가없어짐
모돌의 사이즈만 커지고 프로젝트 사이즈만 커지는상황이 발생해서 import로 사용하지않음 
if문을 주어 require로 써서 사용함

*/

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares)); //미들웨어를 묶어주는 곳
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
/*

자바스크립트는 V8 엔진이 돌아가기만 하면 브라우저가 아니여도 돌아감
근데 브라우저가 아닐때면 윈도우라는 객체가 없음
그래서 브라우저일때만 돌려주려고 
typeof window === "object"

요게들어있음

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

윈도우에 리덕스데브툴즈가 깔려있냐는 물어보는곳

윈도우 상태가 객체이고 리덕스 데브툴즈가 깔려있다면 실행하라는구문 

*/
