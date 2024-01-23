export interface Shape {
  type: "circle" | "rectangle" | "rightTriangle" | "square" | "trapezium";
  area?: number;
}

export interface Circle extends Shape {
  type: "circle";
  radius: number;
}

export interface Square extends Shape {
  width: number;
}
export interface Rectangle extends Shape {
  length: number;
  width: number;
}
export interface RightTriangle extends Shape {
  type: "rightTriangle";
  base: number;
  height: number;
}
export interface Trapezium extends Shape {
  top: number;
  base: number;
  height: number;
}
