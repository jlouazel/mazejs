/* @flow */

import Square from './Square';

class Maze {
  _width: number;
  _height: number;
  _field: Array<Square>;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._field = Maze.make(width, height);
  }

  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }

  static make(width: number, height: number): Array<Square> {
    const field = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const square = new Square(x, y);

        field.push(square);
      }
    }

    return field;
  }
}

export default Maze;
