class Line {
	constructor(endA, endB) {
		this.endA = endA;
		this.endB = endB;
	}
	toString() {
		return `line : (${this.endA.x},${this.endA.y}) and (${this.endB.x},${this.endB.y})`;
	}
	isEqualTo(providedLine) {
		return (
			this.endA.x == providedLine.endA.x &&
			this.endA.y == providedLine.endA.y &&
			this.endB.x == providedLine.endB.x &&
			this.endB.y == providedLine.endB.y
		);
	}
}

module.exports = Line;
