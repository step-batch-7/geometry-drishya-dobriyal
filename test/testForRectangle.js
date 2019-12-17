const assert = require("chai").assert;
const Rectangle = require("../src/rectangle.js");

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
    it("should give false if other shape not an instance of the rectangle but have same co - ordinates as the rectangle", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 1 }, { x: 2, y: 3 });
      const rectangle2 = ({ x: 1, y: 1 }, { x: 2, y: 3 });
      assert.isFalse(rectangle1.isEqualTo(rectangle2));
    });
  });
});
