/* @flow */

import Square from './Square';

import type Field from './Field';

function getRandomBox(field: Field): Square {
  return field.get(
    Math.floor(Math.random() * field.width),
    Math.floor(Math.random() * field.height),
  );
}

function getAdjoiningFreeBoxes(field: Field, box: Square): Array<Square> {
  const boxes = [];

  const x = box.x;
  const y = box.y;

  const leftBox = x > 0 ? field.get(x - 1, y) : null;
  const topBox = y > 0 ? field.get(x, y - 1) : null;
  const rightBox = x < field.width ? field.get(x + 1, y) : null;
  const bottomBox = y < field.height ? field.get(x, y + 1) : null;

  if (leftBox && !leftBox._visited) {
    boxes.push(leftBox);
  }
  if (topBox && !topBox._visited) {
    boxes.push(topBox);
  }
  if (rightBox && !rightBox._visited) {
    boxes.push(rightBox);
  }
  if (bottomBox && !bottomBox._visited) {
    boxes.push(bottomBox);
  }

  return boxes;
}

function openWall(boxA: Square, boxB: Square) {
  const xAxis = boxA.x - boxB.x;
  const yAxis = boxA.y - boxB.y;

  if (xAxis === 1) {
    boxA.open(Square.SIDES.LEFT);
    boxB.open(Square.SIDES.RIGHT);
  }
  if (xAxis === -1) {
    boxA.open(Square.SIDES.RIGHT);
    boxB.open(Square.SIDES.LEFT);
  }
  if (yAxis === 1) {
    boxA.open(Square.SIDES.TOP);
    boxB.open(Square.SIDES.BOTTOM);
  }
  if (yAxis === -1) {
    boxA.open(Square.SIDES.BOTTOM);
    boxB.open(Square.SIDES.TOP);
  }
}

export function generate(field: Field) {
  let currentBox = getRandomBox(field);
  const stack = [currentBox];

  currentBox.visited = true;

  while (stack.length > 0) {
    const adjoiningFreeBoxes = getAdjoiningFreeBoxes(field, currentBox);
    if (adjoiningFreeBoxes.length) {
      const newBox = adjoiningFreeBoxes[Math.floor(Math.random() * adjoiningFreeBoxes.length)];

      openWall(currentBox, newBox);
      currentBox = newBox;
      currentBox.visited = true;

      stack.unshift(currentBox);
    } else {
      stack.shift();
      currentBox = stack[0];
    }
  }
}
