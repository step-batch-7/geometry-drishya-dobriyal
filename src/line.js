const compareObject = function(object1, object2) {
  return object1.x == object2.x && object1.y == object2.y;
};

class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }
  toString() {
    return `line : (${this.endA.x},${this.endA.y}) and (${this.endB.x},${this.endB.y})`;
  }
  isEqualTo(compreTo) {
    return (
      compreTo instanceof Line &&
      compareObject(this.endA, compreTo.endA) &&
      compareObject(this.endB, compreTo.endB)
    );
  }
}

module.exports = Line;
