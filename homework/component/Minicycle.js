import React, { useState } from "react";
import styled from "styled-components";

const Minicycle = (props) => {
  console.log(props.day);
  let [a, setA] = useState([false, false, false, false, false]);
  function clcikEvent(position) {
    let Clist = [false, false, false, false, false];
    console.log(position);
    for (let i = 0; i < Clist.length; i++) {
      if (i <= position) {
        Clist[i] = true;
      }
    }
    setA(Clist);
  }

  return (
    <CheckList>
      <Check
        onClick={() => clcikEvent(0)}
        style={{ background: a[0] ? "yellow" : "gray" }}
      />
      <Check
        onClick={() => clcikEvent(1)}
        style={{ background: a[1] ? "yellow" : "gray" }}
      />
      <Check
        onClick={() => clcikEvent(2)}
        style={{ background: a[2] ? "yellow" : "gray" }}
      />
      <Check
        onClick={() => clcikEvent(3)}
        style={{ background: a[3] ? "yellow" : "gray" }}
      />
      <Check
        onClick={() => clcikEvent(4)}
        style={{ background: a[4] ? "yellow" : "gray" }}
      />
    </CheckList>
  );
};
export default Minicycle;

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
