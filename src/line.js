const arePointsEqual = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
};

const areIntercepDiff = function(line1, line2) {
  const line1Yintercept = line1.endA.y - line1.slope * line1.endA.x;
  const line2Yintercept = line2.endA.y - line2.slope * line2.endA.x;
  if (line1Yintercept != line2Yintercept && line2Yintercept != Infinity) {
    return true;
  }
  const line1XIntercept = (line1.endA.y - line1Yintercept) / line1.slope;
  const line2XIntercept = (line2.endA.y - line2Yintercept) / line2.slope;
  return !(line1XIntercept === line2XIntercept);
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
    const XLength = this.endB.x - this.endA.x;
    const YLength = this.endB.y - this.endA.y;
    return Math.hypot(XLength, YLength);
  }
  get slope() {
    return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
  }
  isParallelTo(otherLine) {
    return (
      otherLine instanceof Line &&
      otherLine.slope === this.slope &&
      areIntercepDiff(otherLine, this)
    );
  }
  findX(YAxisPoint) {
    if (YAxisPoint >= this.endB.y || YAxisPoint <= this.endA.x) return NaN;
    return (YAxisPoint - this.endA.y) / this.slope + this.endA.x;
  }
  findY(XAxisPoint) {
    if (XAxisPoint >= this.endB.x || XAxisPoint <= this.endA.x) return NaN;
    return this.slope * (XAxisPoint - this.endA.x) + this.endA.y;
  }
  hasPoint(point) {
    return this.findX(point.y) === point.x;
  }
  split() {
    const XmiddlePoint = (this.endA.x + this.endB.x) / 2;
    const YmiddlePoint = (this.endA.y + this.endB.y) / 2;
    const midPoint = { x: XmiddlePoint, y: YmiddlePoint };
    const line1 = new Line(this.endA, midPoint);
    const line2 = new Line(midPoint, this.endB);
    return [line1, line2];
  }
}

module.exports = Line;
