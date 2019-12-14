const arePointsEqual = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
    this.XLength = this.endB.x - this.endA.x;
    this.YLength = this.endB.y - this.endA.y;
  }
  toString() {
    const start = `(${this.endA.x},${this.endA.y})`;
    const end = `(${this.endB.x},${this.endB.y})`;
    return `line : ${start} and ${end}`;
  }
  isEqualTo(shape) {
    return (
      shape instanceof Line &&
      arePointsEqual(this.endA, shape.endA) &&
      arePointsEqual(this.endB, shape.endB)
    );
  }
  get length() {
    return Math.hypot(this.XLength, this.YLength);
  }
  get slope() {
    return this.YLength / this.XLength;
  }
  isParallelTo(otherLine) {
    return otherLine instanceof Line && otherLine.slope === this.slope;
  }
}

module.exports = Line;
