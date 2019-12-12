const assert = require("assert");
const Line = require("../src/line.js");

describe("line", function() {
	it("should return line representation in form of string  ", function() {
		const endA = { x: 0, y: 0 };
		const endB = { x: 0, y: 4 };
		const line1 = new Line(endA, endB);
		const actualValue = line1.toString();
		assert.strictEqual(actualValue, "line : (0,0) and (0,4)");
		const line2 = new Line(endA, endB);
		assert.strictEqual(actualValue, line2.toString());
	});
});

describe("isEqualOrNot", function() {
	it("should be true if line are equal ", function() {
		const endA = { x: 0, y: 0 };
		const endB = { x: 0, y: 4 };
		const line1 = new Line(endA, endB);
		const comparedWithLine = { endA: { x: 0, y: 0 }, endB: { x: 0, y: 4 } };
		assert.ok(line1.isEqualTo(comparedWithLine));
	});
	it("should be false if line are equal ", function() {
		const endA = { x: 0, y: 0 };
		const endB = { x: 0, y: 4 };
		const line1 = new Line(endA, endB);
		const comparedWithLine = { endA: { x: 2, y: 0 }, endB: { x: 0, y: 4 } };
		assert.ok(!line1.isEqualTo(comparedWithLine));
	});
});
