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


  // Store the mapConfig() to tiles when the component mount
  useEffect(() => {
    const { mapMatries, tileMap } = mapConfig();
    const mapMatrixUp = mapMatries[0];
    const mapMatrixDown = mapMatries[1];

    const mapSize = {
      width: mapMatrixUp[0].length,
      height: mapMatrixUp.length,
    }
    const _upTiles = [];
    const _downTiles = [];
    let id = 0;

    // store the upper map
    for (let y = 0; y < mapSize.height; ++y) {
      const row = []
      for (let x = 0; x < mapSize.width; ++x) {
        row.push({
          x, y, id: id++, v: { x: tileMap[mapMatrixUp[y][x]].x, y: tileMap[mapMatrixUp[y][x]].y }
        });
      }
      _upTiles.push(row);
    }
    setUpTiles(_upTiles);

    // store the lower map
    for (let y = 0; y < mapSize.height; ++y) {
      const row = []
      for (let x = 0; x < mapSize.width; ++x) {
        row.push({
          x, y, id: id++, v: { x: tileMap[mapMatrixDown[y][x]].x, y: tileMap[mapMatrixDown[y][x]].y }
        });
      }
      _downTiles.push(row);
    }
    setDownTiles(_downTiles);
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
      {/* Upper Map */}
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

      {/* Lower Map */}
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