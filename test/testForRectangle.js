const assert = require("chai").assert;
const Rectangle = require("../src/rectangle.js");
const Point = require("../src/point.js");

describe("rectangle", function() {
  describe("toString", function() {
    it("should give string representation of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (2,3)]");
    });
  });

  describe("isEqualTo", function() {
    it("should give true if other shape is instance of the rectangle and have same co - ordinates as the rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should give true if other shape is instance of the rectangle and have same co - ordinates as the rectangle but interchanged", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = new Rectangle({ x: 2, y: 3 }, { x: 1, y: 1 });
      assert.isOk(rectangle1.isEqualTo(rectangle2));
    });
    it("should give false if other shape not an instance of the rectangle but have same co - ordinates as the rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = ({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
  });

  describe("area", function() {
    it("should give area of a given rectangle", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle1.area, 6);
    });
    it("should give area as zero of a given rectangle if diagonal is horizontal", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 3 });
      assert.strictEqual(rectangle1.area, 0);
    });
    it("should give area as zero of a given rectangle if diagonal is vertical", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 0 });
      assert.strictEqual(rectangle1.area, 0);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of a given rectangle", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 3 });
      assert.strictEqual(rectangle1.perimeter, 10);
    });
    it("should give perimeter as twice of width of a given rectangle if diagonal is horizontal", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 0, y: 3 });
      assert.strictEqual(rectangle1.perimeter, 6);
    });
    it("should give perimeter as twice of length of a given rectangle if diagonal is vertical", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 0 });
      assert.strictEqual(rectangle1.perimeter, 6);
    });
  });

  describe("hasPoint", function() {
    it("should validate for a point that lies in that rectangle ", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 3 });
      const point = new Point(2, 0);
      assert.isOk(rectangle1.hasPoint(point));
    });
    it("should invalidate for a point that lies inside that rectangle ", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 3 });
      const point = new Point(1, 1);
      assert.isFalse(rectangle1.hasPoint(point));
    });
    it("should invalidate for a point that lies outside that rectangle ", function() {
      const rectangle1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 3 });
      const point = new Point(5, 4);
      assert.isFalse(rectangle1.hasPoint(point));
    });
  });
});
