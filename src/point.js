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
  findDistanceTo(otherpoint) {
    if (otherpoint instanceof Point) {
      const dx = otherpoint.x - this.x;
      const dy = otherpoint.y - this.y;
      return Math.hypot(dx, dy);
    }
    return NaN;
  }
  isOn(line) {
    return line.hasPoint(this);
  }
}

module.exports = Point;
