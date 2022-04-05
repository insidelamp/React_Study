import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    _onClick,
    is_flex_L,
    is_flex_R,
    is_flex_W,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    is_flex_L: is_flex_L,
    is_flex_R: is_flex_R,
    is_flex_W: is_flex_W,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  is_flex_L: false,
  is_flex_R: false,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  center: false,
  _onClick: () => {},
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items:center; justify-content: space-between;`
      : ""}
      
  ${(props) => (props.center ? `text-align: center` : "")}
  ${(props) =>
    props.is_flex_L
      ? `display: flex; flex-direction : row; align-items:center; justify-content: space-between;`
      : ""}
  ${(props) =>
    props.is_flex_R
      ? `display: flex; flex-direction : row-reverse; align-items:center; justify-content: space-between;`
      : ""}
  ${(props) =>
    props.is_flex_W
      ? `display: flex; flex-direction : column; align-items:center; justify-content: space-between;`
      : ""}
`;
export default Grid;
