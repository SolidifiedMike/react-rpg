import React from "react";

export default function TilePalette({tileset, position, size, activeTile, setActiveTile}) {
  const {width, height} = size;
  const tiles = [];
  let id = 0;

  for (let y = 0; y < height; y = y + 32) {
    const row = [];
    for (let x = 0; x < width; x = x + 32) {
      row.push({x, y, id: id++});
    }
    tiles.push(row);
  }

  // console.dir(tiles);

  return (
    <div id="palette"
      style={{
        position: "absolute",
        border: "1px solid black",
        top: position.x,
        left: position.y,
        zIndex: 10,
        backgroundColor: "white",
      }}  
    >
      <img id="handle" src="/sprites/drag-handle.png" alt="" />
      <div
        style={{
          background: `url(/sprites/${tileset}.png)`,
          backgroundPosition: `-${activeTile.x*32}px -${activeTile.y*32}px`,
          backgroundRepeat: "no-repeat",
          width: 32,
          height: 32,
        }}
      />
      {
        tiles.map((row, y) => (
          <div style={{ display: "flex"}}>
            {row.map((tile, x) => 
            <div
            onClick={() => setActiveTile({x: x, y: y})}
              style={{
                borderTop: "1px solid black",
                borderRight: "1px solid black",
                background: `url(/sprites/${tileset}.png)`,
                backgroundPosition: `-${x*32}px -${y*32}px`,
                backgroundRepeat: "no-repeat",
                width: 32,
                height: 32,
              }}
            />)}
          </div>
        ))
      }
    </div>
  )
}