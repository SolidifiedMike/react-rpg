import React from "react";

export default function Map({tiles, setTiles, activeTile, tileset, size}) {

  function cloneMatrix(m) {
    const clone = new Array(m.length);
    for (let i = 0; i < m.length; ++i) {
      clone[i] = m[i].slice(0);
    }
    return clone;
  }

  function dropTile(x, y) {
    setTiles(prev => {
      // clone matrix, alter tile @ x/y to the active tile
      const clone = cloneMatrix(prev);
      const tile = {
        ...clone[y][x],
        v: activeTile
      };
      clone[y][x] = tile;
      console.log(tile.v);
      return clone;
    });
  }

  return <div
    style={{
      boxSizing: "border-box",
      backgroundColor: "white",
      width: size.width,
    }}
  >
    {
      tiles.map((row, y) => <div style = {{display: "flex"}}>
        {
          row.map((tile,x) => (
            <div
            onClick={() => dropTile(x, y)}
              style={{
                borderTop: "1px solid black",
                borderRight: "1px solid black",
                background: `url(/sprites/${tileset}.png)`,
                backgroundPosition: `-${tile.v.x*32}px -${tile.v.y*32}px`,
                backgroundRepeat: "no-repeat",
                width: 32,
                height: 32,
              }}
            />
          ))
        }
      </div>)
    }
  </div>
}