import React from "react";

const Text = (props) => {
  const text = React.useRef(null);

  const hoverEvent = () => {
    text.current.style.background = "yellow";
  };
  const uhoverEvent = () => {
    text.current.style.background = "green";
  };

  React.useEffect(() => {
    text.current.addEventListener("mouseover", hoverEvent);
    text.current.addEventListener("mouseleave", uhoverEvent);

    return () => {
      text.current.removeEventListener("mouseover", hoverEvent);
    };
  }, []);
  return <h1 ref={text}>텍스트입니다!</h1>;
};

export default Text;
