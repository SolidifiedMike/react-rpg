import React from "react";
import Player from "./components/player";
import Board from "./components/board";
import ChuangKou from "./components/chuangkou";

function App() {
  return (
    <div>
      <Board />
      <Player skin="f1" />
      <ChuangKou />
    </div>
  );
}

export default App;
