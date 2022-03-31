import React, { useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { loadTextFB, addTextFB } from "../redux/modules/text";
import { useHistory } from "react-router-dom";

function PlusPage() {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const my_wrap = React.useRef(null);
  React.useEffect(() => {
    dispatch(loadTextFB());
  });
  const addTextList = () => {
    dispatch(
      addTextFB({
        word: text1.current.value,
        explanation: text2.current.value,
        example: text3.current.value,
      }),
      history.goBack()
    );
  };

  window.setTimeout(() => {
    console.log(my_wrap);
  }, 5000);

  return (
    <ContentsMain>
      <SubName>단어 추가하기!</SubName>
      <Input>
        <NameList>
          <KrName>단어</KrName>
          <TextWrite type="text" ref={text1} />
        </NameList>{" "}
        <NameList>
          <KrName2>설명</KrName2>
          <TextWrite type="text" ref={text2} />
        </NameList>
        <NameList>
          <KrName3>예시</KrName3>
          <TextWrite type="text" ref={text3} />
        </NameList>
      </Input>
      <Pluss onClick={addTextList}>추가하기</Pluss>
    </ContentsMain>
  );
}
const ContentsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SubName = styled.div`
  color: blueviolet;
  font-size: 30px;
  font-weight: bold;
  margin: 20px 0px;
`;
const Input = styled.div`
  width: 280px;
  height: 300px;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 30px;
  border: 1px solid #ddd;
  position: relative;
  background-color: gold;
`;

const Pluss = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 5px solid white;
  background-color: aliceblue;
  position: absolute;
  right: 35px;
  bottom: 120px;
`;

const NameList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: blueviolet;
  font-size: 25px;
  font-weight: 500;
`;
const TextWrite = styled.input`
  margin: 20px 0px;
  width: 200px;
  height: 20px;
`;

const KrName = styled.div``;
const KrName2 = styled.div``;
const KrName3 = styled.div``;
export default PlusPage;
