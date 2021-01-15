export default function mapConfig() {
  // map matrix
  const mapMatrix = [[3, 3, 4, 3, 3],
                     [1, 1, 1, 1, 1],
                     [2, 2, 2, 2, 2],
                     [3, 5, 3, 4, 3]];
  
  const mapMatrix2 = [[3, 3, 3, 3, 3],
                     [3, 3, 3, 3, 3],
                     [3, 3, 3, 3, 3],
                     [3, 3, 3, 3, 3]];

  // Each id match to a tile in the tile set
  // x and y are the coordinates of a tile in tile set
  // the player cannot walk through the tile when obs = 1
  const tileMap = {
    0: { x: 6, y: 0, obs: 0, interact: 0 },
    1: { x: 1, y: 5, obs: 0, interact: 0 },
    2: { x: 1, y: 3, obs: 0, interact: 0 },
    3: { x: 0, y: 2, obs: 0, interact: 0 },
    4: { x: 2, y: 1, obs: 1, interact: 0 },
    5: { x: 1, y: 2, obs: 0, interact: 1 },
  }

  // array of map matries
  // mapMatries[0] is the upper map, mapMatries[1] is the lower map
  var mapMatries = new Array();
  mapMatries.push(mapMatrix);
  mapMatries.push(mapMatrix2);

  return {
    mapMatries,
    tileMap,
  };
}