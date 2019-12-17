const Point = require("./point.js");
const Line = require("./line.js");

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
  }
  toString() {
    return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endC.x},${this.endC.y})]`;
  }
  isEqualTo(otherShape) {
    return (
      otherShape instanceof Rectangle &&
      otherShape.endA.isEqualTo(this.endA) &&
      otherShape.endC.isEqualTo(this.endC)
    );
  }
  get area() {
    return (this.endC.y - this.endA.y) * (this.endC.x - this.endA.x);
  }
  get perimeter() {
    return 2 * (this.endC.y - this.endA.y + this.endC.x - this.endA.x);
  }
}

module.exports = Rectangle;
