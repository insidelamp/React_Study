import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { auth } from "../../shared/firebase";
import firebase from "firebase/app";
//action
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

//action creators

const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
/*이전에 사용하던 액션 함수

const logIn = (user) => {
    return {
        type: LOG_IN,
        user
    }
}

*/

//initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: "mango",
};

// middleware actions
const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then((res) => {
      auth
        .signInWithEmailAndPassword(id, pwd)
        .then((user) => {
          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: "",
              uid: user.user.uid,
            })
          );
          history.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        // Signed in
        // ...

        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: "",
                uid: user.user.uid,
              })
            );
            history.push("/");
          })
          .catch((error) => {});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: "",
            id: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, { history }) {
    auth.signOut().then(() => {
      dispatch(logOut());
      history.replace("/");
    });
  };
};

//reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }), //produce 사용설명 밑에 달음
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// 원래 값을 가져오려면 action.user_id 형식으로쓰지만
//createAction 으로 가져올시 중간에 단계가 하나더 껴서 값들이 payload 로 들어와짐
// action.payload.user로 사용해야 payload 를 중간에 거치고 user로 넘겨주었던 그 값을 가져올수있음

/* 이전에 사용하던 리듀서방식

const reducer = (statee = {}, action = {}) => {
  switch (action.type) {
    case "LOG_IN": {
      state.user = action.user;
    }
  }
};

*/

/* 현재 사용하는 리듀서 방식을 풀어 해쳐놓은것

const reducer = handleActions({
    [LOG_IN]: (state, action)=> {

    },

},initialState = {});

*/

// action creator export

const actionCreators = {
  logOut,
  getUser,
  signupFB,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };

/* produce 사용?설명
immer : 불변성유지
깊게 들어가려면 자바스크립트의 proxy 라는걸 알아야함

간단하게 알아봅시다

immer 라는것은 어떤 A라는것을 가져다가
불변성 유지를 하면서 고치고싶어 그래서 immer로 produce를 쓸래 라고 하면은 
immer가 A를 받아다가 A`  만들어버리고  A`를 고치게되어 
A.b가=2 로해도 값이 바뀜 원래 바꾸려면 A`.b =2 형식으로 바꿔줘야함
신경쓰지않아도 바꿔주니 편하다함

즉 원본값을 복사해서 어떤작업을 하고싶은지를 주는거임
원본값을 복사해서 draft 아 담아 함수로 사용하는것 

*/
