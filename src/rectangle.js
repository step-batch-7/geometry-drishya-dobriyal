const Point = require("./point.js");
const Line = require("./line.js");

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
    this.diagonal = new Line(endA, endC);
  }
  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }
  isEqualTo(otherShape) {
    return (
      otherShape instanceof Rectangle &&
      otherShape.diagonal.isEqualTo(this.diagonal)
    );
  }
}

module.exports = Rectangle;
