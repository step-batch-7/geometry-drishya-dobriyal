class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  clone() {
    return new Point(this.x, this.y);
  }
  isEqualTo(other) {
    return other instanceof Point && other.x == this.x && other.y == this.y;
  }
  visit(functionRef) {
    return functionRef(this.x, this.y);
  }
}

module.exports = Point;
