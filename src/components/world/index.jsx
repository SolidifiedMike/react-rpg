import React from "react";
import Player from "../player";
import Board from "../board";

export default function World() {
  const MAPWIDTH = 19 * 32;
  const MAPHEIGHT = 13 * 32;

  return (
    <div
      style={{
        width: MAPWIDTH,
        height: MAPHEIGHT,
        // border: "3px solid #73AD21",
      }}
    >
      <Board />
      <Player skin="f1" />
    </div>
  );
}