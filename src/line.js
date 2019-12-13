const arePointsEqual = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
};

const calcSlope = function(endA, endB) {
  const XLength = endB.x - endA.x;
  const YLength = endB.y - endA.y;
  return YLength / XLength;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
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
    const XLength = this.endA.x - this.endB.x;
    const YLength = this.endA.y - this.endB.y;
    return Math.hypot(XLength, YLength);
  }
  get slope() {
    return calcSlope(this.endA, this.endB);
  }
  isParallelTo(otherLine) {
    return (
      otherLine instanceof Line &&
      calcSlope(otherLine.endA, otherLine.endB) === this.slope
    );
  }
}

module.exports = Line;
