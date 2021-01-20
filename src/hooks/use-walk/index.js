import { useState } from "react";

export default function useWalk(maxSteps) {
  /*
  Arg:
    maxSteps: the number of sprite's animation frame

  Return:
    walk: a function that used to update value
    position: sprite's position after the movement
    direction: sprite's direction
    step: sprite's animation frame
  */
  const [position, setPosition] = useState({ x: 1, y: 2 });
  const [direction, setDirection] = useState(0);
  const [step, setStep] = useState(0);

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };
  const stepSize = 0.5;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  }

  function walk(direction, mapMatrix, baseMatrix, tileMap) {
    setDirection(prev => {
      if (directions[direction] === prev) {
        // get the next tile id
        var next_pos_x = position.x + modifier[direction].x;
        var next_pos_y = position.y + modifier[direction].y;
        // dont know why but works
        if (direction === "down") {
          next_pos_y = Math.ceil(next_pos_y);
        } else if (direction === "up") {
          next_pos_y = Math.floor(next_pos_y);
        } else if (direction === "right") {
          next_pos_x = Math.ceil(next_pos_x);
        } else if (direction === "left") {
          next_pos_x = Math.floor(next_pos_x);
        }
        var next_pos_x_1 = Math.floor(next_pos_x);
        var next_pos_y_1 = Math.floor(next_pos_y);
        var next_pos_x_2 = Math.ceil(next_pos_x);
        var next_pos_y_2 = Math.ceil(next_pos_y);

        // check board borders
        if (0 <= next_pos_x && next_pos_x < mapMatrix[0].length &&
          0 <= next_pos_y && next_pos_y < mapMatrix.length) {
          var next_tile_id_1 = mapMatrix[next_pos_y_1][next_pos_x_1];
          var next_tile_id_2 = mapMatrix[next_pos_y_2][next_pos_x_2];
          var base_tile_id_1 = baseMatrix[next_pos_y_1][next_pos_x_1];
          var base_tile_id_2 = baseMatrix[next_pos_y_2][next_pos_x_2];
          // determine if move
          if (tileMap[next_tile_id_1].obs !== 1 && tileMap[next_tile_id_2].obs !== 1
            && tileMap[base_tile_id_1].obs !== 1 && tileMap[base_tile_id_2].obs !== 1) {
            move(direction);
          }
        }
      }
      return directions[direction];
    });
    setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0);
  }

  function move(direction) {
    setPosition(prev => ({
      x: prev.x + modifier[direction].x,
      y: prev.y + modifier[direction].y,
    }))
  }

  return {
    walk,
    direction,
    step,
    position,
  }
}