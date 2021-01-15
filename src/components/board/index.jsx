import React, { useEffect, useState } from "react";
import mapConfig from "../../map_configs";

export default function Board() {

  const tileset = "zones/spring";
  const [upTiles, setUpTiles] = useState([]);
  const [downTiles, setDownTiles] = useState([]);
  // For now, we don't need to set Tile or set mapSize
  /*
  const [tileset, setTileset] = useState("zones/spring");
  const [mapSize, setMapSize] = useState({
    width: mapMatrix[0].length,
    height: mapMatrix.length,
  });
  */

  const { mapMatries, tileMap } = mapConfig();
  const mapMatrixUp = mapMatries[0];
  const mapMatrixDown = mapMatries[1];

  // Store the mapConfig() to tiles when the page mount (the upper map)
  // 还必须放在useEffect里，不然会报错草
  useEffect(() => {
    const mapSize = {
      width: mapMatrixUp[0].length,
      height: mapMatrixUp.length,
    }
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; ++y) {
      const row = []
      for (let x = 0; x < mapSize.width; ++x) {
        row.push({
          x, y, id: id++, v: { x: tileMap[mapMatrixUp[y][x]].x, y: tileMap[mapMatrixUp[y][x]].y }
        });
      }
      _tiles.push(row);
    }
    setUpTiles(_tiles);
  }, [])

  // Store the mapConfig() to tiles when the page mount (the upper map)
  useEffect(() => {
    const mapSize = {
      width: mapMatrixDown[0].length,
      height: mapMatrixDown.length,
    }
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; ++y) {
      const row = []
      for (let x = 0; x < mapSize.width; ++x) {
        row.push({
          x, y, id: id++, v: { x: tileMap[mapMatrixDown[y][x]].x, y: tileMap[mapMatrixDown[y][x]].y }
        });
      }
      _tiles.push(row);
    }
    setDownTiles(_tiles);
  }, [])


  return (
    <div
      style={{
        position: "relative",
        width: 700,
        height: 500,
        backgroundColor: "grey",
        overflow: "hidden",
        border: "1px solid black",
      }}
    >
      {/* 上层地图 */}
      <div style={{ position: "absolute", zIndex: 2}}>
        {
          upTiles.map((row, y) =>
            <div style={{ display: "flex" }} key={y}>
              {
                row.map((tile, x) =>
                  <div
                    style={{
                      //borderTop: "1px solid black",
                      //borderRight: "1px solid black",
                      // marginTop: "-1px",
                      background: `url(/sprites/${tileset}.png)`,
                      backgroundPosition: `-${tile.v.x * 32}px -${tile.v.y * 32}px`,
                      backgroundRepeat: "no-repeat",
                      width: 32,
                      height: 32,
                    }}
                    key={x}
                  />
                )
              }
            </div>
          )
        }
      </div>
      
      {/* 下层地图 */}
      <div style={{ position: "absolute", zIndex: 1 }}>
        {
          downTiles.map((row, y) =>
            <div style={{ display: "flex" }} key={y}>
              {
                row.map((tile, x) =>
                  <div
                    style={{
                      background: `url(/sprites/${tileset}.png)`,
                      backgroundPosition: `-${0 * 32}px -${2 * 32}px`,
                      backgroundRepeat: "no-repeat",
                      width: 32,
                      height: 32,
                    }}
                    key={x}
                  />
                )
              }
            </div>
          )
        }
      </div>
      
    </div>
  )
}