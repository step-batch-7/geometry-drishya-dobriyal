const assert = require("assert");
const Line = require("../src/line.js");

describe("line", function() {
	it("should make a horizontal line of given co-ordinates ", function() {
		point1 = [0, 0];
		point2 = [4, 0];
		horizontalLine1 = new Line(point1, point2);
		actualValue = horizontalLine1.toString();
		horizontalLine2 = new Line(point1, point2);
		expectedValue = horizontalLine2.toString();
		assert.strictEqual(actualValue, expectedValue);
	});
	it("should make a vertical line of given co-ordinates ", function() {
		point1 = [0, 0];
		point2 = [0, 4];
		verticalLine1 = new Line(point1, point2);
		actualValue = verticalLine1.toString();
		verticalLine2 = new Line(point1, point2);
		expectedValue = verticalLine2.toString();
		assert.strictEqual(actualValue, expectedValue);
	});
	it("should state whether the asked given lines are equal or not ", function() {
		point1 = [0, 0];
		point2 = [4, 0];
		horizontalLine1 = new Line(point1, point2);
		assert.strictEqual(horizontalLine1.isEqualOrNot("----"), true);
	});
});
