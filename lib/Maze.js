/* @flow */

import Field from './Field';
import Square from './Square';

class Maze {
  _width: number;
  _height: number;
  _field: Field;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._field = new Field(width, height);
  }

  get height(): number {
    return this._height;
  }

  get width(): number {
    return this._width;
  }

  toString() {
    let result = '_';

    for (let i = 0; i < this._field.width; i++) {
      result += '__';
    }

    for (let y = 0; y < this._field.height; y++) {
      result += '\n|';
      for (let x = 0; x < this._field.width; x++) {
        const box = this._field.get(x, y);

        if (box.walls[Square.SIDES.BOTTOM]) {
          result += '_';
        } else {
          result += ' ';
        }
        if (box.walls[Square.SIDES.RIGHT]) {
          result += '|';
        } else {
          result += ' ';
        }
      }
    }
    result += '\n';


    // for (let i = 0; i < this._field.width; i++) {
    //   result += '__';
    // }

    // result += '_';

    return result;
  }
}

export default Maze;
