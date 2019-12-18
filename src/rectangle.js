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

const getDimen = function(vertexA, vertexC) {
  const length = getSides(vertexA, vertexC)[0].length;
  const width = getSides(vertexA, vertexC)[1].length;
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
