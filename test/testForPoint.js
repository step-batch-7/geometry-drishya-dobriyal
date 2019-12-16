const assert = require("chai").assert;
const Point = require("../src/point.js");
const Line = require("../src/line.js");

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
    it("should invalidate for points having different x and y co - ordinate", function() {
      const point1 = new Point(1, 2);
      const point2 = new Point(5, 4);
      assert.isFalse(point1.isEqualTo(point2));
    });
  });

  describe("visit", function() {
    it("should do the addition operation with the parameter passed ", function() {
      const point1 = new Point(2, 3);
      const actualValue = point1.visit((x, y) => x + y);
      assert.strictEqual(actualValue, 5);
    });
    it("should do the multiplication operation with the parameter passed ", function() {
      const point1 = new Point(2, 3);
      const actualValue = point1.visit((x, y) => x * y);
      assert.strictEqual(actualValue, 6);
    });
  });

  describe("findDistanceTo", function() {
    it("should give the shortest distance between two points that make horizontal line", function() {
      const point1 = new Point(3, 0);
      const point2 = new Point(4, 0);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 1;
      assert.strictEqual(actualValue, expectedValue);
    });
    it("should give the shortest distance between two points that make vertical line ", function() {
      const point1 = new Point(0, 3);
      const point2 = new Point(0, 4);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 1;
      assert.strictEqual(actualValue, expectedValue);
    });
    it("should give the shortest distance between two points that make positive slanting line ", function() {
      const point1 = new Point(3, 3);
      const point2 = new Point(4, 4);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 1.4;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
    it("should give the shortest distance between two points that make negative slanting line ", function() {
      const point1 = new Point(4, 4);
      const point2 = new Point(3, 3);
      const actualValue = point1.findDistanceTo(point2);
      const expectedValue = 1.4;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
    it("should give NaN if the point given is not an instance of Point class", function() {
      const point1 = new Point(4, 4);
      const point2 = { x: 3, y: 3 };
      const actualValue = point1.findDistanceTo(point2);
      assert.isNaN(actualValue);
    });
  });

  describe("isOn", function() {
    it("should give true if line specified has the point in it", function() {
      const point1 = new Point(2, 0);
      const endA = { x: 0, y: 0 };
      const endB = { x: 4, y: 0 };
      const line1 = new Line(endA, endB);
      const actualValue = point1.isOn(line1);
      assert.ok(actualValue);
    });
    it("should give false if line specified does not have the point in it", function() {
      const point1 = new Point(6, 0);
      const endA = { x: 0, y: 0 };
      const endB = { x: 4, y: 0 };
      const line1 = new Line(endA, endB);
      const actualValue = point1.isOn(line1);
      assert.isFalse(actualValue);
    });
  });
});
