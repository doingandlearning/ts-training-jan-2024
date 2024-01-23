import { Circle, Rectangle, RightTriangle, Shape, Square } from "./shape-types";

var PI = 3.14;

function getCircleArea(circle: Circle) {
  const { radius } = circle;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle) {
  const { length, width } = rectangle;
  return length * width;
}

function getSquareArea(square: Square) {
  const { width } = square;
  return width * width;
}

function getRightTriangleArea(triangle: RightTriangle) {
  const { base, height } = triangle;
  return (base * height) / 2;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape as Circle);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape as Rectangle);
      break;
    case "square":
      shape.area = getSquareArea(shape as Square);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape as RightTriangle);
      break;
  }
}

const circle: Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);

const triangle: RightTriangle = {
  type: "rightTriangle",
  base: 10,
  height: 5,
};
getArea(triangle);
console.log(triangle);
