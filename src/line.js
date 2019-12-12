class Line {
	constructor(point1, point2) {
		this.point1 = point1;
		this.point2 = point2;
	}
	toString() {
		return `line co-ordinates are (${this.point1.x},${this.point1.y}) and (${this.point2.x},${this.point2.y})`;
	}
	isEqualOrNot(providedLine) {
		return (
			this.point1.x == providedLine.point1.x &&
			this.point1.y == providedLine.point1.y &&
			this.point2.x == providedLine.point2.x &&
			this.point2.y == providedLine.point2.y
		);
	}
}

module.exports = Line;
