const compareObject = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  toString() {
    return `line : (${this.endA.x},${this.endA.y}) and (${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(providedLine) {
    return (
      compareObject(this.endA, providedLine.endA) &&
      compareObject(this.endB, providedLine.endB)
    );
  }
}

module.exports = Line;
