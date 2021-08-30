import React from "react";
import styled from "styled-components";
import Pawn from "./Pawn";

const StyleSquare = styled.div`
  background-color: ${(props) => props.color};
  justify-content: center;
  align-items: center;
  display: flex;
  width: 80px;
  height: 80px;
`;

const Square = (props) => {
  const PawnInitialPosition = {
    White: [8, 9, 10, 11, 12, 13, 14, 15],
    Black: [48, 49, 50, 51, 52, 53, 54, 55],
  };

  if (PawnInitialPosition.White.includes(props.position)) {
    return (
      <StyleSquare color={props.color} className={props.position}>
        <Pawn />
      </StyleSquare>
    );
  }

  return (
    <StyleSquare color={props.color} className={props.position}>
      {" "}
    </StyleSquare>
  );

  // return <StyleSquare color={props.color}></StyleSquare>;
};

export default Square;
