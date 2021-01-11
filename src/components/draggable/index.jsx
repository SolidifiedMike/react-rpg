import React, { useEffect, useState } from "react";
import useDraggable from "../../hooks/use-draggable";
import TilePalette from "../tile-palette";
import Map from "../map";

export default function Draggable() {
  // const {position} = useDraggable("handle");
  const [tileset, setTileset] = useState("zones/spring");
  const [activeTile, setActiveTile]  = useState({x: 1, y: 4});
  const [tiles, setTiles] = useState([]);

  // 目前是用这个matrix去新建一个教程里的matrix，可能performance不太行？
  // 矩阵的长宽决定了地图的长宽（格子数，每个格子32*32）
  // map matrix
  const myTiles = [[3, 3, 3, 3, 3],
                   [1, 1, 1, 1, 1],
                   [2, 2, 2, 2, 2],
                   [3, 3, 3, 3, 3]];

  // 每个id对应的格子
  // x和y是对应素材图上的坐标
  const myPalette = {
    0: {x: 6, y: 0},
    1: {x: 1, y: 5},
    2: {x: 1, y: 3},
    3: {x: 0, y: 2},
    4: {x: 0, y: 0},
  }
  
  const [mapSize, setMapSize] = useState({
    width: myTiles[0].length,
    height: myTiles.length,
  });

  

  useEffect(() => {
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; ++y) {
      const row = []
      for (let x = 0; x < mapSize.width; ++x) {
        console.log("x: " + x + " y: " + y);
        row.push({
          x, y, id: id++, v: {x: myPalette[myTiles[y][x]].x, y: myPalette[myTiles[y][x]].y}
          // x, y, id: id++, v: {x: 0, y: 0}
        });
      }
      _tiles.push(row);
    }
    setTiles(_tiles);
  }, [])


  return (
  <div
    style={{
      position: "relative",
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: "grey",
      overflow: "hidden",
      border: "1px solid black",
    }}
  >
    {/* <TilePalette
      position = {position}
      tileset={tileset}
      activeTile = {activeTile}
      setActiveTile = {setActiveTile}
      size = {{
        height: 288,
        width: 640
      }}
    ></TilePalette> */}
    <Map
      tiles = {tiles}
      tileset = {tileset}
      size = {mapSize}
      activeTile = {activeTile}
      setTiles = {setTiles}
    ></Map>
  </div>
  )
}