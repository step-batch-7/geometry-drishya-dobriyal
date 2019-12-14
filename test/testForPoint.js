const assert = require("chai").assert;
const Point = require("../src/point.js");

describe("point", function() {
  describe("toString", function() {
    it("should give string representation of the point ", function() {
      const point1 = new Point(2, 3);
      assert.strictEqual(point1.toString(), "[Point @(2,3)]");
    });
  });

  describe("clone", function() {
    it("should return a new point of same co - ordinates", function() {
      const point1 = new Point(1, 2);
      assert.deepStrictEqual(point1.clone(), point1);
    });
  });
});
