/* @flow */

class Square {
  _x: number;
  _y: number;
  _visited: boolean;
  _walls: Array<boolean>;

  static SIDES = {
    TOP: 0,
    RIGHT: 1,
    BOTTOM: 2,
    LEFT: 3,
  };

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
    this._visited = false;
    this._walls = [true, true, true, true];
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get visited(): boolean {
    return this._visited;
  }

  set visited(isVisited: boolean) {
    this._visited = isVisited;
  }

  open(side: number) {
    this._walls[side] = false;
  }

  get walls(): Array<boolean> {
    return this._walls;
  }
}

export default Square;
