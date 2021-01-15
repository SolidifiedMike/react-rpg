export default function mapConfig() {
  // map matrix
  const mapMatrix = [[3, 3, 4, 3, 3],
                     [1, 1, 1, 1, 1],
                     [2, 2, 2, 2, 2],
                     [3, 3, 3, 4, 3]];

  // Each id match to a tile in the tile set
  // x and y are the coordinates of a tile in tile set
  // the player cannot walk through the tile when obs = 1
  const tileMap = {
    0: { x: 6, y: 0, obs: 0 },
    1: { x: 1, y: 5, obs: 0 },
    2: { x: 1, y: 3, obs: 0 },
    3: { x: 0, y: 2, obs: 0 },
    4: { x: 2, y: 1, obs: 1 },
  }

  return {
    mapMatrix,
    tileMap,
  };
}