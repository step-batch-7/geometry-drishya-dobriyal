class Line {
	constructor(point1, point2) {
		this.point1 = point1;
		this.point2 = point2;
	}
	createLine() {
		if (this.point1[1] == this.point2[1]) {
			if (this.point1[1] == this.point2[1]) {
				return "-".repeat(this.point2[0] - this.point1[0]);
			}
			return "-\n".repeat(this.point2[0] - this.point1[0]);
		}
		if (this.point1[0] === this.point2[0]) {
			return "-\n".repeat(this.point2[1] - this.point1[1]);
		}
	}
	toString() {
		return this.createLine().toString();
	}
}

module.exports = Line;
