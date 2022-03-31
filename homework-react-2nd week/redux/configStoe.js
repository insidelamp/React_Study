import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import text from "./modules/text";
import thunk from "redux-thunk";

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const middlewares = [thunk];
const rootReducer = combineReducers({ text });
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);
export default store;
