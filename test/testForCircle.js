const assert = require("chai").assert;
const Circle = require("../src/circle.js");

describe("circle", function() {
  describe("toString", function() {
    it("should give the string representation of circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      assert.strictEqual(circle.toString(), "[Circle @(0,0) radius 5");
    });
  });

  describe("isEqual", function() {
    it("should give true if they are of same instance and same loc and radius", function() {
      const circle = new Circle({ x: 0, y: 0 }, 5);
      const circle1 = new Circle({ x: 0, y: 0 }, 5);
      assert.ok(circle.isEqual(circle1));
    });
  });
});
