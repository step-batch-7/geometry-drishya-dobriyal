const assert = require("assert");
const Line = require("../src/line.js");

describe("line", function() {
	it("should return line representation in form of string  ", function() {
		endA = { x: 0, y: 0 };
		endB = { x: 0, y: 4 };
		line1 = new Line(endA, endB);
		actualValue = line1.toString();
		assert.strictEqual(actualValue, "line : (0,0) and (0,4)");
		line2 = new Line(endA, endB);
		assert.strictEqual(actualValue, line2.toString());
	});
});

describe("isEqualOrNot", function() {
	it("should be true if line are equal ", function() {
		endA = { x: 0, y: 0 };
		endB = { x: 0, y: 4 };
		line1 = new Line(endA, endB);
		comparedWithLine = { endA: { x: 0, y: 0 }, endB: { x: 0, y: 4 } };
		assert.ok(line1.isEqualTo(comparedWithLine));
	});
	it("should be false if line are equal ", function() {
		endA = { x: 0, y: 0 };
		endB = { x: 0, y: 4 };
		line1 = new Line(endA, endB);
		comparedWithLine = { endA: { x: 2, y: 0 }, endB: { x: 0, y: 4 } };
		assert.ok(!line1.isEqualTo(comparedWithLine));
	});
});
