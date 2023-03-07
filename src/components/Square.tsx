import React, { useState } from "react";

interface SquareProps {
  squareValue: string;
  onSquareClick: () => void;
}

const Square: React.FC<SquareProps> = ({ squareValue, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {squareValue}
    </button>
  );
};

export default Square;
