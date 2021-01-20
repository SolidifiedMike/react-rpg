import React from "react";
import Player from "../player";
import Board from "../board";

export default function World() {
  const MAPWIDTH = 19 * 32;

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        marginLeft: (window.innerWidth - MAPWIDTH) / 2,
        marginTop: "2%",
      }}
    >
      <Board />
      <Player skin="f1" />
    </div>
  );
}