import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import mapConfig from "../../map_configs"

export default function Player({skin}) {
  const { myTiles, myPalette } = mapConfig();
  const {dir, step, walk, position} = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((e) => {
    // formatize direction strings
    const dir = e.key.replace("Arrow", "").toLowerCase();
    // walk the player
    walk(dir, myTiles, myPalette);
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