import "./App.css";
import { useState } from "react";

import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1>ReactTacToe</h1>
      <Board />
    </div>
  );
}

export default App;
