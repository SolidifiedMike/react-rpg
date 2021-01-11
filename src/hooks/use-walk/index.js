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

  const stepSize = 16;

  const modifier = {
    down: {x: 0, y: stepSize},
    left: {x: -stepSize, y: 0},
    right: {x: stepSize, y: 0},
    up: {x: 0, y: -stepSize},
  }

  function walk(dir) {
    // console.log(dir);
    setDir(prev => {
      if (directions[dir] == prev) {
        if (!(position.x + modifier[dir].x >= 32 && position.x + modifier[dir].x <= 48 &&
          position.y + modifier[dir].y >= 32 && position.y + modifier[dir].y <= 48)) {
          move(dir);
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