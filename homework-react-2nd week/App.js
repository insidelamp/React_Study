// 연결값 불러오는 부분
import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadTextFB } from "./redux/modules/text";
import MainText from "./pages/MainText";
import DetailPage from "./pages/DeatailPage";
import NotFound from "./pages/NotFound";
import PlusPage from "./pages/PlusPages";

//실행하는 함수
function App() {
  const [list, setList] = React.useState([]); // 현재상태
  const dispatch = useDispatch(); //사용되는 입력값 가져오기
  console.log(111, list);

  React.useEffect(() => {
    dispatch(loadTextFB());
  }); // 화면 loadTextFB라는 값을 렌더해줌
  console.log(111, list);
  return (
    <div>
      <Container>
        <Title>내 메모장</Title>
        <Switch>
          <Route path="/" exact>
            <MainText list={list} />
          </Route>
          <Route path="/plus" exact>
            <PlusPage list={list} />
          </Route>
          <Route exact path="/detail/:index" component={DetailPage} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 5px;
  background-color: wheat;
`;

const Title = styled.div`
  color: white;
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  border-bottom: 5px solid white;
`;

export default App;
