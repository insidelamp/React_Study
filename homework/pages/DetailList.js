import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Minicycle from "../component/Minicycle/Minicycle";
import { useParams } from "react-router-dom";

const DetailList = (props) => {
  let day = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const { dayId } = useParams();
  return (
    <div className="App">
      <Container>
        <h1>내 평가는?</h1>
        <DaySubList>
          <SelectDay>{day[dayId]}</SelectDay>
          <div>평점남기기</div>
        </DaySubList>
        <Daylist>
          <Minicycle />
        </Daylist>
        <Link to={"/"}>
          <NavLink>평점 남기기</NavLink>
        </Link>
      </Container>
    </div>
  );
};

export default DetailList;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: 180px auto 0px auto;
  height: 40vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Daylist = styled.li`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const DaySubList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
`;

const SelectDay = styled.div`
  width: 80px;
  height: 30px;
  background-color: orange;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const NavLink = styled.button`
  background-color: purple;
  color: white;
  border-radius: 5px;
  margin-top: 10px;
  width: 200px;
  height: 50px;
`;
