import React from "react";
import Actor from "../actor";
import Popup from "../popup";
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
    A pop-up window when player interact with object
  */
  const { mapMatries, tileMap } = mapConfig();
  const mapMatrix = mapMatries[0];
  const baseMatrix = mapMatries[1];
  const { direction, step, walk, position } = useWalk(3);
  const { ifShow, interact } = useInteract();
  const data = {
    height: 32,
    width: 32,
  };

  useKeyPress((e) => {
    const myKey = e.key.replace("Arrow", "").toLowerCase();
    if (myKey === "left" || myKey === "right" || myKey === "up" || myKey === "down") {
      // try to walk the player
      walk(myKey, mapMatrix, baseMatrix, tileMap);
    }

    if (myKey === "e") {
      // check if the player can interact with the tile
      interact(position, mapMatrix, tileMap);
    }
    e.preventDefault();
  })

  return (
    <div style={{ position: "absolute"}}>
      <Actor
        sprite={`/sprites/skins/${skin}.png`}
        data={data}
        step={step}
        direction={direction}
        position={position}
      />
      <Popup ifShow={ifShow} />
    </div>);
}