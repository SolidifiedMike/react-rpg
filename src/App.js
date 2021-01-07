import React from "react";
import Player from "./components/player";

function App() {
  const data = {
    h: 32,
    w: 32,
  }
  return (
    <div className="zone-container">
      <Player skin="f1"/>
    </div>
  );
}

export default App;
