import styled from "styled-components";
import React from "react";

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };
  if (shape === "circle") {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  if (shape === "rectangle") {
    return (
      <Aspect0utter>
        <AspecInner {...styles}></AspecInner>
      </Aspect0utter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: "circle",
  src: "https://insidelamp.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20220314_085335507.jpg",
  size: 36,
};
const Aspect0utter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspecInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
