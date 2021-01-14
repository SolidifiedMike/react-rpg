import {useState} from "react";

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const stepSize = 0.5;

  const modifier = {
    down: {x: 0, y: stepSize},
    left: {x: -stepSize, y: 0},
    right: {x: stepSize, y: 0},
    up: {x: 0, y: -stepSize},
  }

  function walk(dir, tiles, palette) {
    // console.log(dir);
    setDir(prev => {
      if (directions[dir] == prev) {
        // get the next tile id
        var next_pos_x = Math.floor(position.x + modifier[dir].x);
        var next_pos_y = Math.floor(position.y + modifier[dir].y);
        // check borders
        if (0 <= next_pos_x && next_pos_x < tiles[0].length && 
            0 <= next_pos_y && next_pos_y < tiles.length) {
          var next_tile_id = tiles[next_pos_y][next_pos_x];
          // determine if move
          if (palette[next_tile_id].obs != 1) {
            move(dir);
          }
        }
        

        

        // move(dir);
      } 
      return directions[dir];
    });
    setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0);
  }

  function move(dir) {
    // console.log(position.x + " " + position.y);
    setPosition(prev => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }))
    // console.log("new " + position.x + " " + position.y);
  }

  return {
    walk, 
    dir, 
    step, 
    position,
  }
}