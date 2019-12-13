const assert = require("chai").assert;
const Line = require("../src/line.js");

describe("line", function() {
  describe("toString", function() {
    it("should return line representation in form of string  ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.toString();
      assert.strictEqual(actualValue, "line : (0,0) and (0,4)");
    });
  });

  describe("isEqualTo", function() {
    it("should be true if line are equal ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      const comparedWithLine = new Line(endA, endB);
      assert.ok(line1.isEqualTo(comparedWithLine));
    });
    it("should be false if shape is not instance of Line", function() {
      let endA = { x: 1, y: 0 };
      let endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 1, y: 4 };
      endB = { x: 0, y: 4 };
      const compareWithLine = { endA, endB };
      assert.ok(!line1.isEqualTo(compareWithLine));
    });
    it("should be false if line are having  unequal x-axis ", function() {
      let endA = { x: 0, y: 0 };
      let endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 1, y: 0 };
      endB = { x: 0, y: 4 };
      const compareWithLine = new Line(endA, endB);
      assert.ok(!line1.isEqualTo(compareWithLine));
    });
    it("should be false if line are having  unequal y-axis ", function() {
      let endA = { x: 1, y: 0 };
      let endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 1, y: 4 };
      endB = { x: 0, y: 4 };
      const compareWithLine = new Line(endA, endB);
      assert.ok(!line1.isEqualTo(compareWithLine));
    });
  });

  describe("length", function() {
    it(" 2 points having different Y co-Ordinates and same X co-Ordinates", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.length;
      const expectedValue = 4;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
    it(" 2 points having different X co-Ordinates and same Y co-Ordinates ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 4, y: 0 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.length;
      const expectedValue = 4;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
    it(" 2 points having different X co-Ordinates and same Y co-Ordinates and works for floating point ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 4.4, y: 0 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.length;
      const expectedValue = 4;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
    it(" 2 points having different Y co-Ordinates and same X co-Ordinates and works for floating point", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 0, y: 5.4 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.length;
      const expectedValue = 5;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
    it("2 points with different X and Y co - ordinates works for floating point", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 5.4, y: 5.4 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.length;
      const expectedValue = 7.5;
      assert.approximately(actualValue, expectedValue, 0.5);
    });
  });

  describe("isParallelTo", function() {
    it.skip("should validate for Two parallel line ", function() {
      let endA = { x: 0, y: 0 };
      let endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 0, y: 0 };
      endB = { x: 0, y: 4 };
      const line2 = new Line(endA, endB);
      assert.ok(line1.isParallelTo(line2));
    });
  });

  describe("slope", function() {
    it("should give the slope of asked line having a positive slope ", function() {
      let endA = { x: 1, y: 0 };
      let endB = { x: 2, y: 4 };
      const line1 = new Line(endA, endB);
      assert.strictEqual(line1.slope, 4);
    });
    it("should give the slope of asked line having a negative slope ", function() {
      let endA = { x: 1, y: 5 };
      let endB = { x: 2, y: 1 };
      const line1 = new Line(endA, endB);
      assert.strictEqual(line1.slope, -4);
    });
    it("should give the Infinity for vertical line ", function() {
      let endA = { x: 2, y: 0 };
      let endB = { x: 2, y: 4 };
      const line1 = new Line(endA, endB);
      assert.strictEqual(line1.slope, Infinity);
    });
    it("should give the zero for horizontal line ", function() {
      let endA = { x: 0, y: 4 };
      let endB = { x: 2, y: 4 };
      const line1 = new Line(endA, endB);
      assert.strictEqual(line1.slope, 0);
    });
  });
});
