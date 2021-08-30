import React from "react";
import styled from "styled-components";

// const PawnStyle = styled.div``;
const Image = styled.img`
  width: 50px;
  height: 50px;
  margin: 0;
  padding: 0;
  color: white;
`;

const Pawn = () => {
  return (
    <div>
      <Image src="https://img.icons8.com/ios/50/000000/pawn.png" alt="pawn" />
    </div>
  );
};

export default Pawn;
