import React from "react";
import Player from "./components/player";
import Board from "./components/board";

function App() {
  return (
    <div>
      <Board />
      <Player skin="f1" />
    </div>
  );
}

export default App;
