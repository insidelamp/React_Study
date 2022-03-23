import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainCycle = (props) => {
  console.log(props.count);
  const count = props.count;
  let [random, setRandom] = useState(randomEvent(count));

  function randomEvent(count) {
    let Clist = [false, false, false, false, false];
    for (let i = 0; i < Clist.length; i++) {
      if (i <= count) {
        Clist[i] = true;
      }
    }
    // setRandom(Clist);
    return Clist;
  }

  useEffect(() => {
    // randomEvent(count);
    // console.log("call me ap0i");
  }, []);
  return (
    <CheckList>
      <Check style={{ background: random[0] ? "yellow" : "gray" }} />
      <Check style={{ background: random[1] ? "yellow" : "gray" }} />
      <Check style={{ background: random[2] ? "yellow" : "gray" }} />
      <Check style={{ background: random[3] ? "yellow" : "gray" }} />
      <Check style={{ background: random[4] ? "yellow" : "gray" }} />
    </CheckList>
  );
};
export default MainCycle;

const CheckList = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
`;

const Check = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: yellow;
`;
