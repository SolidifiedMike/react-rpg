export default function mapConfig() {
  // map matrix
  const mapMatrix = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

  const baseMatrix = [[6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 10],
                      [5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
                      [5, 8, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9],
                      [5, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 9]];

  // Each id match to a tile in the tile set
  // x and y are the coordinates of a tile in tile set
  // the player cannot walk through the tile when obs = 1
  const tileMap = {
    0: { x: 0, y: 0, obs: 0, interact: 0 }, // blank
    1: { x: 2, y: 2, obs: 1, interact: 0 }, // up wall lower
    2: { x: 2, y: 3, obs: 0, interact: 0 }, // normal floor upwall shardow
    3: { x: 2, y: 4, obs: 0, interact: 0 }, // normal floor
    4: { x: 2, y: 1, obs: 1, interact: 0 }, // up wall upper
    5: { x: 0, y: 2, obs: 1, interact: 0 }, // left wall
    6: { x: 0, y: 1, obs: 1, interact: 0 }, // left wall joint
    7: { x: 1, y: 4, obs: 0, interact: 0 }, // floor with left wall
    8: { x: 1, y: 3, obs: 0, interact: 0 }, // floor with top-left wall
    9: { x: 3, y: 4, obs: 1, interact: 0 }, // right wall
    10: { x: 3, y: 1, obs: 1, interact: 0 }, // right wall joint

    11: { x: 0, y: 1, obs: 1, interact: 0 }, // furniture 1
    12: { x: 0, y: 2, obs: 1, interact: 0 }, // furniture 1
  }

  // array of map matries
  // mapMatries[0] is the upper map, mapMatries[1] is the lower map
  var mapMatries = [];
  mapMatries.push(mapMatrix);
  mapMatries.push(baseMatrix);

  return {
    mapMatries,
    tileMap,
  };
}