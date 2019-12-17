const Point = require("./point.js");

class Rectangle {
  constructor(endA, endC) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endC.x, endA.y);
    this.endC = new Point(endC.x, endC.y);
    this.endD = new Point(endA.x, endC.y);
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
