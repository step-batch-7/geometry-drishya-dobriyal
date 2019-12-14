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

  describe("isEqualTo", function() {
    it("should validate for equal points", function() {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      assert.ok(point1.isEqualTo(point2));
    });
    it("should invalidate for points not of same instance", function() {
      const point1 = new Point(1, 2);
      const point2 = { x: 1, x: 2 };
      assert.isFalse(point1.isEqualTo(point2));
    });
    it("should invalidate for points having different x co - ordinate", function() {
      const point1 = new Point(1, 2);
      const point2 = new Point(4, 2);
      assert.isFalse(point1.isEqualTo(point2));
    });
    it("should invalidate for points having different y co - ordinate", function() {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 4);
      assert.isFalse(point1.isEqualTo(point2));
    });
  });
});
