import React from "react";
import Sprite from "../sprite";

export default function Actor({ sprite, data, position = { x: 0, y: 0 }, step = 0, direction = 0 }) {
  /*
  Args:
    sprite: a react component
    data: including sprite's height, and width
    position: sprite's position on the board
    step: sprite's animation frame in sprite asset
    direction: sprite direction

  Return:
    A sprite component with updated position and data
  */
  const { height, width } = data;
  return (
    <Sprite
      image={sprite}
      position={position}
      data={{
        x: step * width,
        y: direction * height,
        width,
        height,
      }}
    />
  )
}