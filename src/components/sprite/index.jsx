import React from "react";

export default function Sprite({ image, data, position }) {
  /*
  Args:
    image: the path of sprite asset file
    data: including specific information about the sprite,
          such as height, width, and the position in the
          asset picture
    position: sprite position on the board

  Return:
    the sprite image
  */
  const { y, x, height, width } = data;
  return <div
    style={{
      position: "absolute",
      top: position.y * 32,
      left: position.x * 32,
      display: "inline-block",
      height: `${height}px`,
      width: `${width}px`,
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: `-${x}px -${y}px`,
      zIndex: 20,
    }}
  />
}