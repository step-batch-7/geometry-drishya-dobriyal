const Point = require("./point.js");

class Circle {
  constructor(coOrdinates, radius) {
    this.coOrdinates = new Point(coOrdinates.x, coOrdinates.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.coOrdinates.x},${this.coOrdinates.y}) radius ${this.radius}`;
  }
  isEqual(other) {
    return (
      other instanceof Circle &&
      other.radius == this.radius &&
      other.coOrdinates.isEqualTo(this.coOrdinates)
    );
  }
  get area() {
    return (22 / 7) * this.radius ** 2;
  }
}

module.exports = Circle;