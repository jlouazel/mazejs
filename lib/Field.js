/* @flow */

import Square from './Square';
import { generate } from './generate';

class Field {
  _width: number;
  _height: number;
  _boxes: Array<Square>;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
    this._boxes = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this._boxes.push(new Square(x, y));
      }
    }

    generate(this);
  }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

  get(x: number, y: number): Square {
    return this._boxes[(y * this._width) + x];
  }
}

export default Field;
