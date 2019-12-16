const assert = require("chai").assert;
const Circle = require("../src/circle.js");
const Point = require("../src/point.js");

describe("circle", function() {
  describe("toString", function() {
    it("should give the string representation of circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.strictEqual(circle.toString(), "[Circle @(0,0) radius 5");
    });
  });

  describe("isEqual", function() {
    it("should give true if they are of same instance and same location and radius", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(circle.isEqual(circle1));
    });
    it("should give false if they are of same instance ,same location and but different radius", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const circle1 = new Circle({ x: 0, y: 0 }, 6);
      assert.isFalse(circle.isEqual(circle1));
    });
    it("should give false if they are of same instance , same radius and diff location", function() {
      const circle = new Circle({ x: 3, y: 0 }, 5);
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      assert.isFalse(circle.isEqual(circle1));
    });
    it("should give false if they are of same instance and same location and but different instance", function() {
      const circle = new Circle({ x: 3, y: 0 }, 5);
      const circle1 = ({ x: 0, y: 0 }, 5);
      assert.isFalse(circle.isEqual(circle1));
    });
  });

  describe("area", function() {
    it("should give the area of the given circle", function() {
      const circle = new Circle({ x: 3, y: 0 }, 7);
      assert.approximately(circle.area, 154, 0.5);
    });
  });

  describe("permiter", function() {
    it("should give the perimeter of the given circle", function() {
      const circle = new Circle({ x: 3, y: 0 }, 7);
      assert.approximately(circle.perimeter, 44, 0.5);
    });
  });

  describe("hasPoint", function() {
    it("should be true if the point is in the circumference of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const point = new Point(0, 7);
      assert.isOk(circle.hasPoint(point));
    });
    it("should be false if the point is outside the circumference of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const point = new Point(0, 8);
      assert.isFalse(circle.hasPoint(point));
    });
    it("should be false if the point is inside the circumference of the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 7);
      const point = new Point(0, 4);
      assert.isFalse(circle.hasPoint(point));
    });
  });
});
