import React from "react";
import BlackSquare from "./BlackSquare";
import WhiteSquare from "./WhiteSquare";
import styled from "styled-components";

const BoardStyle = styled.div`
  margin: 0 auto;
  width: 640px;
  height: 640px;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border: 2px solid red;
`;

const Board = () => {
  const arr = Array.from(Array(64).keys());

  const value = arr.map((item) => {
    let row = Math.floor(item / 8);
    let column = item % 8;
    // if (row % 2 === 0 && column % 2 === 0) {
    //   return <WhiteSquare key={item} />;
    // }

    // if (row % 2 === 0 && column % 2 === 1) {
    //   return <BlackSquare key={item} />;
    // }

    // if (row % 2 !== 0 && column % 2 === 0) {
    //   return <BlackSquare key={item} />;
    // }

    // // if (row % 2 !== 0 && column % 2 === 1) {
    //   return <WhiteSquare key={item} />;
    // // }

    if ((row + column) % 2 === 0) {
      return <WhiteSquare position={item} key={item} />;
    }
    return <BlackSquare position={item} key={item} />;
  });

  return <BoardStyle>{value}</BoardStyle>;
};

export default Board;
