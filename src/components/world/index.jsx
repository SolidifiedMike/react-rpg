import React from "react";
import Player from "../player";
import Board from "../board";

export default function World() {

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        width: "100%",
        height: "100vh",
        backgroundColor: "grey",
        // padding: 100,
        overflow: "hidden",
        border: "1px solid black",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Board />
      <Player skin="f1" />
    </div>
  );
}