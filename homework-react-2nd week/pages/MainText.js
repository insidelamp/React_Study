import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const MainText = (props) => {
  let history = useHistory();
  const item = useSelector((state) => state.text.list);
  console.log(222, item);

  return (
    <MainList>
      <ListStyle>
        {item.map((item, index) => {
          return (
            <ListPage key={index}>
              <ItemStyles>
                단어:
                <ItemStyle>{item.word}</ItemStyle>
                <Icon
                  className="list_item"
                  key={index}
                  onClick={() => {
                    history.push("/detail/" + item.id);
                  }}
                >
                  ✍️
                </Icon>
              </ItemStyles>
              <ItemStyles>
                설명:
                <ItemStyle
                  className="list_item"
                  key={index}
                  onClick={() => {
                    history.push("/detail/" + item.id);
                  }}
                >
                  {item.explanation}
                </ItemStyle>
              </ItemStyles>
              <ItemStyle3>
                예시:
                <ItemStyle
                  className="list_item"
                  key={index}
                  onClick={() => {
                    history.push("/detail/" + item.id);
                  }}
                >
                  {item.example}
                </ItemStyle>
              </ItemStyle3>
            </ListPage>
          );
        })}
      </ListStyle>
      <Link to="/plus">
        <Pluss>눌러!</Pluss>
      </Link>
    </MainList>
  );
};
const MainList = styled.div`
  overflow: auto;
`;
const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;
  border-bottom: 5px solid white;
  position: relative;
`;
const ListPage = styled.div`
  width: 250px;
  height: 330px;
  margin: 50px 20px 10px 20px;
  padding-top: 10px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gold;
  position: relative;
`;

const ItemStyle = styled.div`
  width: 150px;
  padding: 16px;
  margin: 8px;
  border-radius: 20px;
  background-color: gray;
`;

const ItemStyles = styled.div`
  font-weight: bold;
  color: white;
`;
const ItemStyle3 = styled.div`
  font-weight: bold;
  color: cornflowerblue;
`;

const Icon = styled.button`
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 25px;
  background-color: aliceblue;
  border: 5px solid white;
  border-radius: 25px;
  margin-top: 5px;
`;

const Pluss = styled.button`
  position: absolute;
  right: 35px;
  bottom: 120px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 5px solid white;
  background-color: aliceblue;
  font-weight: bold;
  font-size: 20px;
`;
export default MainText;
