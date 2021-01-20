import { useState } from "react";

export default function useInteract() {
  /*
  Returns a boolean value, ifShow.
  If ifShow is true, the player can interact with this object,
  Otherwise, the player cannot.
  */

  const [ifShow, setIfShow] = useState(false);

  function interact(position, mapMatrix, tileMap) {
    var currentX = Math.floor(position.x);
    var currentY = Math.floor(position.y);
    // get the tile id
    var currentTileId = mapMatrix[currentY][currentX];
    // if current at interactable position
    if (tileMap[currentTileId].interact === 1) {
      // then toggle the ifShow value
      setIfShow(!ifShow);
    }
    else {
      // stop interaction when the player
      // is not at interactable position
      setIfShow(false);
    }
  }

  return {
    ifShow,
    interact,
  };
}