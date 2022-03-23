import React from "react";
import styled from "styled-components";
import MainCycle from "../component/Minicycle/MainCycle";
import { Link } from "react-router-dom";

const Mainlist = (props) => {
  let day = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <Container>
      <H1tag>내 일주일은?</H1tag>
      <Contents>
        <List>
          <Daylist>
            <Daytext>{day[0]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={`/about/0`}>
              <Link1 />
            </Link>
          </Daylist>
          <Daylist>
            <Daytext>{day[1]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={"/about/1"}>
              <Link1 />
            </Link>
          </Daylist>
          <Daylist>
            <Daytext>{day[2]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={"/about/2"}>
              <Link1 />
            </Link>
          </Daylist>
          <Daylist>
            <Daytext>{day[3]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={"/about/3"}>
              <Link1 />
            </Link>
          </Daylist>
          <Daylist>
            <Daytext>{day[4]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={"/about/4"}>
              <Link1 />
            </Link>
          </Daylist>
          <Daylist>
            <Daytext>{day[5]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={"/about/5"}>
              <Link1 />
            </Link>
          </Daylist>
          <Daylist>
            <Daytext>{day[6]}</Daytext>
            <MainCycle count={Math.floor(Math.random() * 4 + 1)} />
            <Link to={"/about/6"}>
              <Link1 />
            </Link>
          </Daylist>
        </List>
      </Contents>
    </Container>
  );
};

export default Mainlist;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: 80px auto 0px auto;
  height: 70vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
`;

const List = styled.ul`
  width: 40vh;
  height: 100%;
`;

const H1tag = styled.h1`
  display: flex;
  justify-content: center;
`;

const Daylist = styled.li`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

const Daytext = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Link1 = styled.div`
  width: 0px;
  height: 0px;
  border-left: 30px solid #666666;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  margin-top: 5px;
`;
