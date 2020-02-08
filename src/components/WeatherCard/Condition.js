import React from "react";
import styled from "@emotion/styled";

const Condition = ({ temp }) => {
  const Temp = styled.h1`
    font-family: "Fira Sans", sans-serif;
    font-size: 2rem;
    font-weight: 200;
  `;

  return <Temp>{temp} °</Temp>;
};

export default Condition;
