const Point = require("./point.js");
const Line = require("./line.js");

const getSides = function(endA, endB, endC, endD) {
  const endB = new Point(endC.x, endA.y);
  const endD = new Point(endA.x, endC.y);
  const lineAB = new Line(endA, endB);
  const lineBC = new Line(endB, endC);
  const lineCD = new Line(endC, endD);
  const lineDA = new Line(endA, endA);
  return { lineAB, lineBC, lineCD, lineDA };
};

const getDiagonals = function(endA, endC) {
  const endB = new Point(endC.x, endA.y);
  const endD = new Point(endA.x, endC.y);
  const diagonalAC = new Line(endA, endC);
  const diagonalBD = new Line(endB, endD);
  return { diagonalAC, diagonalBD };
};

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }
  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }
  isEqualTo(otherShape) {
    if (!(otherShape instanceof Rectangle)) return false;
    const thisDiagonals = getDiagonals(
      { x: this.endA.x, y: this.endA.y },
      { x: this.endC.x, y: this.endC.y }
    );
    const othersDiagonals = getDiagonals(
      { x: otherShape.endA.x, y: otherShape.endA.y },
      { x: otherShape.endC.x, y: otherShape.endC.y }
    );
    return (
      thisDiagonals.diagonalAC.isEqualTo(othersDiagonals.diagonalAC) &&
      thisDiagonals.diagonalBD.isEqualTo(othersDiagonals.diagonalBD)
    );
  }
  get area() {
    const length = this.endC.y - this.endA.y;
    const width = this.endC.x - this.endA.x;
    return length * width;
  }
  get perimeter() {
    const length = this.endC.y - this.endA.y;
    const width = this.endC.x - this.endA.x;
    return 2 * (length + width);
  }
}

module.exports = Rectangle;
