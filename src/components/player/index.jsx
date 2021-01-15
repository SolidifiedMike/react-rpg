import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import mapConfig from "../../map_configs";

export default function Player({ skin }) {
  /*
  Arg:
    skin: the path of the skin image file

  Return:
    A actor component with player data
  */
  const { mapMatrix, tileMap } = mapConfig();
  const { direction, step, walk, position } = useWalk(3);
  const data = {
    height: 32,
    width: 32,
  };

  useKeyPress((e) => {
    const direction = e.key.replace("Arrow", "").toLowerCase();
    walk(direction, mapMatrix, tileMap);
    // prevent scroll the screen when pressing keys
    e.preventDefault();
  })

  return (
    <Actor
      sprite={`/sprites/skins/${skin}.png`}
      data={data}
      step={step}
      direction={direction}
      position={position}
    />);
}