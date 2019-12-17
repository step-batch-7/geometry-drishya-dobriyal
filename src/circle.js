const Point = require("./point.js");

class Circle {
  constructor(coOrdinates, radius) {
    this.coOrdinates = new Point(coOrdinates.x, coOrdinates.y);
    this.radius = radius;
  }
  toString() {
    return `[Circle @(${this.coOrdinates.x},${this.coOrdinates.y}) radius ${this.radius}]`;
  }
  isEqualTo(other) {
    return (
      other instanceof Circle &&
      other.radius == this.radius &&
      other.coOrdinates.isEqualTo(this.coOrdinates)
    );
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  get perimeter() {
    return 2 * Math.PI * this.radius;
  }
  hasPoint(other) {
    return this.radius === other.findDistanceTo(this.coOrdinates);
  }
  moveTo(newCentre) {
    return new Circle(newCentre, this.radius);
  }
  covers(other) {
    return this.radius >= other.findDistanceTo(this.coOrdinates);
  }
}

module.exports = Circle;
