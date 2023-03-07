import React, { useEffect, useState } from "react";
import Square from "./Square";

interface Props {}
const Board: React.FC<Props> = (Props) => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");
  const squaresCopy = squares.slice();

  const handleClick = (value: number) => {
    if (squares[value] !== null || winner !== "") {
      return;
    }
    userChoice(value);
  };

  const userChoice = (value: number) => {
    squaresCopy[value] = "X";
    setSquares(squaresCopy);
    // checkForWinner(squares);
    if (winner === "") {
      computerMove();
    }
  };

  const computerMove = () => {
    if (winner === "") {
      const randomNumber = Math.floor(Math.random() * 9);
      const computerChoice = squaresCopy[randomNumber];
      if (computerChoice !== null) {
        computerMove();
        return;
      }
      squaresCopy[randomNumber] = "O";
      setSquares(squaresCopy);
    } else {
      return;
    }
    // checkForWinner(squares);
  };
  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setWinner("");
  };

  useEffect(() => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
      }
      //check if there's any empty squares left
      if (squares.every((square) => square !== null) && winner === "") {
        setWinner("tie");
      }
    }
  }, [squares]);

  return (
    <>
      {winner && winner !== "tie" ? <h2> Game over! The winner is {winner}</h2> : winner === "tie" ? <h2>Game over! It's a tie!</h2> : null}
      <div id="board">
        <Square squareValue={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square squareValue={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square squareValue={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square squareValue={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square squareValue={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square squareValue={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square squareValue={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square squareValue={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square squareValue={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button className="resetButton" onClick={resetBoard}>
        Reset board
      </button>
    </>
  );
};
export default Board;
