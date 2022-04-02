import React from "react";
import { Text, Input, Button } from "../elements";
import { getCookie, setCookie, deleteCookie } from "../shared/Cookie";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();
  console.log(getCookie("user_id"));
  const login = () => {
    dispatch(userActions.loginAction({ user_name: "perl" }));
  };
  return (
    <React.Fragment>
      <Text size="32px" bold>
        로그인
      </Text>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요."
        _onChange={() => {
          console.log("아이디를 입력했어!");
        }}
      />
      <Input
        label="패스워드"
        placeholder="패스워드를 입력해주세요."
        _onChange={() => {
          console.log("패스워드를 입력했어!");
        }}
      />
      <Button
        text="로그인하기"
        _onClick={() => {
          login();
          console.log("로그인 했어!");
        }}
      ></Button>
    </React.Fragment>
  );
};
export default Login;



/*
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

*/