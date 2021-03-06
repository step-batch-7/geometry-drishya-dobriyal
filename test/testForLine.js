const assert = require("chai").assert;
const Line = require("../src/line.js");
const Point = require("../src/point.js");

describe("line", function() {
  describe("toString", function() {
    it("should return line representation in form of string  ", function() {
      const endA = { x: 1, y: 2 };
      const endB = { x: 2, y: 3 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.toString();
      assert.strictEqual(actualValue, "[Line (1,2) to (2,3)]");
    });
  });

  describe("isEqualTo", function() {
    it("should be true if lines are equal ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      const comparedWithLine = new Line(endA, endB);
      assert.ok(line1.isEqualTo(comparedWithLine));
    });
    it("should return true if the line given is just having reverse order of co-ordinates", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      const comparedWithLine = new Line(endB, endA);
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
    it("should validate for Two horizontal parallel  line ", function() {
      let endA = { x: 1, y: 0 };
      let endB = { x: 1, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 3, y: 0 };
      endB = { x: 3, y: 4 };
      const line2 = new Line(endA, endB);
      assert.ok(line1.isParallelTo(line2));
    });
    it("should validate for Two vertical parallel  line ", function() {
      let endA = { x: 1, y: 3 };
      let endB = { x: 7, y: 3 };
      const line1 = new Line(endA, endB);
      endA = { x: 1, y: 5 };
      endB = { x: 8, y: 5 };
      const line2 = new Line(endA, endB);
      assert.ok(line1.isParallelTo(line2));
    });
    it("should validate for Two slanting parallel  line ", function() {
      let endA = { x: 5, y: 1 };
      let endB = { x: 1, y: 5 };
      const line1 = new Line(endA, endB);
      endA = { x: 0, y: 1 };
      endB = { x: 1, y: 0 };
      const line2 = new Line(endA, endB);
      assert.ok(line1.isParallelTo(line2));
    });
    it("should validate if two line have equal slope and equal intercept ", function() {
      let endA = { x: 1, y: 0 };
      let endB = { x: 0, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 1, y: 7 };
      endB = { x: 0, y: 11 };
      const line2 = new Line(endA, endB);
      assert.ok(line1.isParallelTo(line2));
    });
    it("should invalidate if two line have diff slope ", function() {
      let endA = { x: 5, y: 0 };
      let endB = { x: 1, y: 4 };
      const line1 = new Line(endA, endB);
      endA = { x: 3, y: 0 };
      endB = { x: 3, y: 4 };
      const line2 = new Line(endA, endB);
      assert.isFalse(line1.isParallelTo(line2));
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

  describe("findX", function() {
    it("should give the value of x axis co-ordinate when y co ordinate given is between the range", function() {
      const endA = { x: 2, y: 1 };
      const endB = { x: 4, y: 5 };
      const line1 = new Line(endA, endB);
      assert.strictEqual(line1.findX(3), 3);
    });
    it("should give not a number when the value of  y-axis co ordinate given is more than the line segment range", function() {
      const endA = { x: 3, y: 4 };
      const endB = { x: 9, y: 10 };
      const line1 = new Line(endA, endB);
      assert.isNaN(line1.findX(19));
    });
    it("should give not a number when the value of  y-axis co ordinate given is less than the line segment range", function() {
      const endA = { x: 3, y: 4 };
      const endB = { x: 9, y: 10 };
      const line1 = new Line(endA, endB);
      assert.isNaN(line1.findX(2));
    });
  });

  describe("findY", function() {
    it("should give the value of y axis co-ordinate when x co ordinate given is between the range", function() {
      const endA = { x: 3, y: 4 };
      const endB = { x: 9, y: 10 };
      const line1 = new Line(endA, endB);
      assert.strictEqual(line1.findY(6), 7);
    });
    it("should give not a number when the value of  x-axis co ordinate given is more than the line segment range", function() {
      const endA = { x: 3, y: 4 };
      const endB = { x: 9, y: 10 };
      const line1 = new Line(endA, endB);
      assert.isNaN(line1.findY(19));
    });
    it("should give not a number when the value of  x-axis co ordinate given is less than the line segment range", function() {
      const endA = { x: 3, y: 4 };
      const endB = { x: 9, y: 10 };
      const line1 = new Line(endA, endB);
      assert.isNaN(line1.findY(2));
    });
  });

  describe("hasPoint", function() {
    it("should return true if the point lies in that line ", function() {
      const endA = { x: 2, y: 1 };
      const endB = { x: 4, y: 5 };
      const line1 = new Line(endA, endB);
      const point = new Point(3, 3);
      assert.ok(line1.hasPoint(point));
    });
    it("should return false if the point not in line ", function() {
      const endA = { x: 0, y: 0 };
      const endB = { x: 6, y: 16 };
      const line1 = new Line(endA, endB);
      const point = new Point(3, 3);
      assert.isFalse(line1.hasPoint(point));
    });
  });

  describe("split", function() {
    it("should give two line split at the middle ", function() {
      let endA = { x: 2, y: 1 };
      let endB = { x: 4, y: 5 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.split();
      endA = { x: 2, y: 1 };
      endB = { x: 3, y: 3 };
      const endAhalf = new Line(endA, endB);
      endA = { x: 3, y: 3 };
      endB = { x: 4, y: 5 };
      const endBhalf = new Line(endA, endB);
      const expectedValue = [endAhalf, endBhalf];
      assert.deepStrictEqual(actualValue, expectedValue);
    });
  });

  describe("findPointfromStart", function() {
    it("should give the point from a distance from the starting  of the line is less than the length of line", function() {
      const endA = { x: 4, y: 0 };
      const endB = { x: 8, y: 0 };
      const line1 = new Line(endA, endB);
      const point1 = new Point(6, 0);
      const actualValue = line1.findPointFromStart(2);
      assert.deepStrictEqual(actualValue, point1);
    });
    it("should give null if a distance from the starting of the line is more than the length of line", function() {
      const endA = { x: 4, y: 0 };
      const endB = { x: 6, y: 0 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.findPointFromStart(4);
      assert.deepStrictEqual(actualValue, null);
    });
  });

  describe("findPointfromEnd", function() {
    it("should give the point from a distance from the end of the line is less than the length of line", function() {
      const endA = { x: 4, y: 0 };
      const endB = { x: 8, y: 0 };
      const line1 = new Line(endA, endB);
      const point1 = new Point(6, 0);
      const actualValue = line1.findPointFromEnd(2);
      assert.deepStrictEqual(actualValue, point1);
    });
    it("should give null if a distance from the end of the line is more than the length of line", function() {
      const endA = { x: 4, y: 0 };
      const endB = { x: 6, y: 0 };
      const line1 = new Line(endA, endB);
      const actualValue = line1.findPointFromEnd(3);
      assert.deepStrictEqual(actualValue, null);
    });
  });
});
