import React from "react";

export default function mapConfig() {
  // map matrix
  const myTiles = [[3, 3, 4, 3, 3],
                   [1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 2],
                   [3, 3, 3, 4, 3]];

  // 每个id对应的格子
  // x和y是对应素材图上的坐标
  const myPalette = {
    0: {x: 6, y: 0, obs: 0},
    1: {x: 1, y: 5, obs: 0},
    2: {x: 1, y: 3, obs: 0},
    3: {x: 0, y: 2, obs: 0},
    4: {x: 2, y: 1, obs: 1},
  }
  
  return {
    myTiles,
    myPalette,
  };
}