const arePointsEqual = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
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
}

module.exports = Line;
