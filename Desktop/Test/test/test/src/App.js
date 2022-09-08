import "./App.css";
import { useState, useEffect } from "react";
import { ChessBoard } from "./comoponents/ChessBoard";
import { InputNumber } from "./comoponents/InputNumber";
import { Black } from "./comoponents/Black";
import { White } from "./comoponents/White";

function App() {
  const [number, setNumber] = useState(6);
  console.log(number);
  let board = [];
  const paintChess = (number) => {
    console.log(number);
    for (var i = 1; i <= number; i++) {
      for (var j = 1; j <= number; j++) {
        if ((i + j) % 2 === 0) {
          board.push(<Black />);
        } else {
          board.push(<White />);
        }
      }
    }
  };

  paintChess(number);
  return (
    <div className="App">
      <InputNumber number={number} setNumber={setNumber} />
      <ChessBoard board={board} />
    </div>
  );
}

export default App;
