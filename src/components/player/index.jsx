import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player({skin}) {
  const {dir, step, walk, position} = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    // formatize direction strings
    const dir = e.key.replace("Arrow", "").toLowerCase();
    // hasOwnProperty: to make sure only log arrow keys
    // if (directions.hasOwnProperty(dir)) {
    //   console.dir(dir);
    // }
    // walk the player
    walk(dir);
    // prevent scroll the screen when pressing keys
    e.preventDefault();
  })

  return (
    <Actor 
      sprite={`/sprites/skins/${skin}.png`} 
      data={data} 
      step={step} 
      dir={dir}
      position={position}
    />);
}