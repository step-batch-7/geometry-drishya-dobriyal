const Point = require("./point.js");

const arePointsEqual = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
};

const arePointsCollinear = function(p1, p2, p3) {
  return (
    p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y) === 0
  );
};

const areInRange = function(midPoint, point1, point2) {
  if (point1 > point2) {
    return point2 <= midPoint && midPoint <= point1;
  }
  return point2 >= midPoint && midPoint >= point1;
};

const calcCoOrdinate = function(ratio, coOrdinate1, coOrdinate2) {
  return (ratio * coOrdinate2 + coOrdinate1) / (ratio + 1);
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    const start = `(${this.endA.x},${this.endA.y})`;
    const end = `(${this.endB.x},${this.endB.y})`;
    return `[Line ${start} to ${end}]`;
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
      !arePointsCollinear(this.endA, this.endB, otherLine.endA)
    );
  }
  findX(YAxisPoint) {
    if (areInRange(YAxisPoint, this.endB.y, this.endA.y)) {
      return (YAxisPoint - this.endA.y) / this.slope + this.endA.x;
    }
    return NaN;
  }
  findY(XAxisPoint) {
    if (areInRange(XAxisPoint, this.endB.x, this.endA.x)) {
      return this.slope * (XAxisPoint - this.endA.x) + this.endA.y;
    }
    return NaN;
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
  findPointFromStart(distance) {
    if (this.length >= distance) {
      const distanceEndToPoint = this.length - distance;
      const lengthRatio = distanceEndToPoint / distance;
      const xCoOrdinate = calcCoOrdinate(lengthRatio, this.endA.x, this.endB.x);
      const yCoOrdinate = calcCoOrdinate(lengthRatio, this.endA.y, this.endB.y);
      return new Point(xCoOrdinate, yCoOrdinate);
    }
    return null;
  }
  findPointFromEnd(distance) {
    if (this.length >= distance) {
      const distanceEndToPoint = this.length - distance;
      const lengthRatio = distanceEndToPoint / distance;
      const xCoOrdinate = calcCoOrdinate(lengthRatio, this.endB.x, this.endA.x);
      const yCoOrdinate = calcCoOrdinate(lengthRatio, this.endB.y, this.endA.y);
      return new Point(xCoOrdinate, yCoOrdinate);
    }
    return null;
  }
}

module.exports = Line;
