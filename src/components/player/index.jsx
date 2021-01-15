import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import useInteract from "../../hooks/use-interact";
import mapConfig from "../../map_configs";

export default function Player({ skin }) {
  /*
  Arg:
    skin: the path of the skin image file

  Return:
    A actor component with player data
  */
  const { mapMatries, tileMap } = mapConfig();
  const mapMatrix = mapMatries[0];
  const { direction, step, walk, position } = useWalk(3);
  const { ifShow, interact } = useInteract();
  const data = {
    height: 32,
    width: 32,
  };

  useKeyPress((e) => {
    const myKey = e.key.replace("Arrow", "").toLowerCase();
    if (myKey == "left" || myKey == "right" || myKey == "up" || myKey == "down") {
      // try to walk the player
      walk(myKey, mapMatrix, tileMap);
    }

    if (myKey == "e") {
      // try to interact
      interact(position, mapMatrix, tileMap);
    }
    // console.log(ifShow);
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