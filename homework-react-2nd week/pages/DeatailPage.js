import React, { useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTextFB, updateText, updateTextFB } from "../redux/modules/text";
import styled from "styled-components";

const PlusPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const text_index = params.index;
  console.log(text_index);
  const text_list = useSelector((state) => state.text.list);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);
  console.log(text_list);
  const upTextList = () => {
    dispatch(
      updateTextFB(text_index, {
        word: text1.current.value,
        explanation: text2.current.value,
        example: text3.current.value,
      })
    );

    history.goBack();
  };

  return (
    <ContentsMain>
      {text_list.map((item, index) => {
        if (item.id === text_index)
          return (
            <SubList key={text_index}>
              <ContentsList>
                <BeforeList>{item.word}</BeforeList>
                <TodayList>
                  <NameList>
                    <KrName>단어</KrName>
                    <EgName>word</EgName>
                  </NameList>
                  <CorrectionList type="text" ref={text1} />
                </TodayList>
              </ContentsList>
              <ContentsList>
                <BeforeList>{item.explanation}</BeforeList>
                <TodayList>
                  <NameList>
                    <KrName>설명</KrName>
                    <EgName>explanation</EgName>
                  </NameList>
                  <CorrectionList2 type="text" ref={text2} />
                </TodayList>
              </ContentsList>

              <ContentsList>
                <BeforeList>{item.example}</BeforeList>
                <TodayList>
                  <NameList>
                    <KrName>예시</KrName>
                    <EgName>example</EgName>
                  </NameList>
                  <CorrectionList3 type="text" ref={text3} />
                </TodayList>
              </ContentsList>
              <div>
                <ClickBtn onClick={upTextList}>완료하기</ClickBtn>
                <ClickBtn2
                  onClick={() => {
                    dispatch(deleteTextFB(text_index));
                    history.goBack();
                  }}
                >
                  삭제하기
                </ClickBtn2>
              </div>
            </SubList>
          );
      })}
    </ContentsMain>
  );
};

export default PlusPage;

const ContentsMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubList = styled.div`
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsList = styled.div`
  margin: 10px 0px;
  position: relative;
`;
const BeforeList = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: blueviolet;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TodayList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const NameList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: blueviolet;
  margin-right: 30px;
  font-size: 15px;
  font-weight: 500;
`;
const KrName = styled.div`
  margin-bottom: 10px;
`;
const EgName = styled.div``;

const CorrectionList = styled.input`
  width: 150px;
  height: 30px;
  margin-left: 30px;
`;
const CorrectionList2 = styled.input`
  width: 150px;
  height: 30px;
  margin-left: 10px;
  margin-right: 20px;
`;
const CorrectionList3 = styled.input`
  width: 150px;
  height: 30px;
  margin-left: 23px;
`;

const ClickBtn = styled.button`
  margin: 10px 20px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 5px solid white;
  background-color: aliceblue;
  position: absolute;
  bottom: 120px;
  right: 100px;
`;
const ClickBtn2 = styled.button`
  margin: 10px 20px;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 5px solid white;
  background-color: aliceblue;
  position: absolute;
  bottom: 120px;
  right: 5px;
`;
