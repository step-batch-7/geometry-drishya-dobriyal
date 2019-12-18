const Point = require("./point.js");
const Line = require("./line.js");

const areInRange = function(point, point1, point2) {
  if (point1 > point2) {
    [point1, point2] = [point2, point1];
  }
  return point2 > point && point > point1;
};

const getVertex = function(vertexA, vertexC) {
  const A = new Point(vertexA.x, vertexA.y);
  const B = new Point(vertexC.x, vertexA.y);
  const C = new Point(vertexC.x, vertexC.y);
  const D = new Point(vertexA.x, vertexC.y);
  return { A, B, C, D };
};

const getSides = function(vertexA, vertexC) {
  const vertex = getVertex(vertexA, vertexC);
  const lineAB = new Line(vertex.A, vertex.B);
  const lineBC = new Line(vertex.B, vertex.C);
  const lineCD = new Line(vertex.C, vertex.D);
  const lineDA = new Line(vertex.A, vertex.A);
  return [lineAB, lineBC, lineCD, lineDA];
};

const getDimen = function(vertexA, vertexC) {
  const vertex = getVertex(vertexA, vertexC);
  const length = vertex.A.findDistanceTo(vertex.B);
  const width = vertex.C.findDistanceTo(vertex.B);
  return { length, width };
};

class Rectangle {
  constructor(vertexA, vertexC) {
    this.vertexA = new Point(vertexA.x, vertexA.y);
    this.vertexC = new Point(vertexC.x, vertexC.y);
  }
  toString() {
    return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexC.x},${this.vertexC.y})]`;
  }
  isEqualTo(otherShape) {
    if (!(otherShape instanceof Rectangle)) return false;
    const thisDiagonals = new Line(this.vertexA, this.vertexC);
    const otherDiagonals = new Line(otherShape.vertexA, otherShape.vertexC);
    return thisDiagonals.isEqualTo(otherDiagonals);
  }
  get area() {
    const dimention = getDimen(
      { x: this.vertexA.x, y: this.vertexA.y },
      { x: this.vertexC.x, y: this.vertexC.y }
    );
    return dimention.length * dimention.width;
  }
  get perimeter() {
    const dimention = getDimen(
      { x: this.vertexA.x, y: this.vertexA.y },
      { x: this.vertexC.x, y: this.vertexC.y }
    );
    return 2 * (dimention.length + dimention.width);
  }
  hasPoint(point) {
    if (!(point instanceof Point)) return false;
    const sidelist = getSides(this.vertexA, this.vertexC);
    return sidelist.some(line => line.hasPoint(point));
  }
  covers(point) {
    if (!(point instanceof Point)) return false;
    const isXInRange = areInRange(point.x, this.vertexA.x, this.vertexC.x);
    const isYInRange = areInRange(point.y, this.vertexA.y, this.vertexC.y);
    return isXInRange && isYInRange;
  }
}

module.exports = Rectangle;
