const Point = require("./point.js");
const Line = require("./line.js");

const areInRange = function(point, point1, point2) {
  if (point1 > point2) {
    [point1, point2] = [point2, point1];
  }
  return point2 > point && point > point1;
};

const getSides = function(vertexA, vertexC) {
  const vertexB = new Point(vertexC.x, vertexA.y);
  const vertexD = new Point(vertexA.x, vertexC.y);
  const lineAB = new Line(vertexA, vertexB);
  const lineBC = new Line(vertexB, vertexC);
  const lineCD = new Line(vertexC, vertexD);
  const lineDA = new Line(vertexA, vertexA);
  return [lineAB, lineBC, lineCD, lineDA];
};

const getDiagonals = function(vertexA, vertexC) {
  const vertexB = new Point(vertexC.x, vertexA.y);
  const vetexD = new Point(vertexA.x, vertexC.y);
  const diagonalAC = new Line(vertexA, vertexC);
  const diagonalBD = new Line(vertexB, vetexD);
  return { diagonalAC, diagonalBD };
};

const getDimen = function(vertexA, vertexC) {
  const length = vertexC.y - vertexA.y;
  const width = vertexC.x - vertexA.x;
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
    const thisDiagonals = getDiagonals(
      { x: this.vertexA.x, y: this.vertexA.y },
      { x: this.vertexC.x, y: this.vertexC.y }
    );
    const othersDiagonals = getDiagonals(
      { x: otherShape.vertexA.x, y: otherShape.vertexA.y },
      { x: otherShape.vertexC.x, y: otherShape.vertexC.y }
    );
    return (
      thisDiagonals.diagonalAC.isEqualTo(othersDiagonals.diagonalAC) &&
      thisDiagonals.diagonalBD.isEqualTo(othersDiagonals.diagonalBD)
    );
  }
  get area() {
    const dimention = getDimen(this.vertexA, this.vertexC);
    return dimention.length * dimention.width;
  }
  get perimeter() {
    const dimention = getDimen(this.vertexA, this.vertexC);
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
