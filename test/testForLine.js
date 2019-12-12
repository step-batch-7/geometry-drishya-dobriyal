const assert = require("assert");
const Line = require("../src/line.js");

describe("line", function() {
	it("should return line representation in form of string  ", function() {
		point1 = { x: 0, y: 0 };
		point2 = { x: 0, y: 4 };
		line1 = new Line(point1, point2);
		actualValue = line1.toString();
		assert.strictEqual(actualValue, "line co-ordinates are (0,0) and (0,4)");
		line2 = new Line(point1, point2);
		assert.strictEqual(actualValue, line2.toString());
	});
});

describe("isEqualOrNot", function() {
	it("should be true if line are equal ", function() {
		point1 = { x: 0, y: 0 };
		point2 = { x: 0, y: 4 };
		line1 = new Line(point1, point2);
		comparedWithLine = { point1: { x: 0, y: 0 }, point2: { x: 0, y: 4 } };
		assert.ok(line1.isEqualOrNot(comparedWithLine));
	});
	it("should be false if line are equal ", function() {
		point1 = { x: 0, y: 0 };
		point2 = { x: 0, y: 4 };
		line1 = new Line(point1, point2);
		comparedWithLine = { point1: { x: 2, y: 0 }, point2: { x: 0, y: 4 } };
		assert.ok(!line1.isEqualOrNot(comparedWithLine));
	});
});
