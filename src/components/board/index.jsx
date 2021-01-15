import React, { useEffect, useState } from "react";
import mapConfig from "../../map_configs";

export default function Board() {

  const tileset = "zones/spring";
  const [tiles, setTiles] = useState([]);
  // For now, we don't need to set Tile or set mapSize
  /*
  const [tileset, setTileset] = useState("zones/spring");
  const [mapSize, setMapSize] = useState({
    width: mapMatrix[0].length,
    height: mapMatrix.length,
  });
  */

  // Store the mapConfig() to tiles when the page mount
  useEffect(() => {
    const { mapMatrix, tileMap } = mapConfig();
    const mapSize = {
      width: mapMatrix[0].length,
      height: mapMatrix.length,
    }
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; ++y) {
      const row = []
      for (let x = 0; x < mapSize.width; ++x) {
        row.push({
          x, y, id: id++, v: { x: tileMap[mapMatrix[y][x]].x, y: tileMap[mapMatrix[y][x]].y }
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
        width: 700,
        height: 500,
        backgroundColor: "grey",
        overflow: "hidden",
        border: "1px solid black",
      }}
    >
      {
        tiles.map((row, y) =>
          <div style={{ display: "flex" }} key={y}>
            {
              row.map((tile, x) =>
                <div
                  style={{
                    //borderTop: "1px solid black",
                    //borderRight: "1px solid black",
                    marginTop: "-1px",
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
  )
}