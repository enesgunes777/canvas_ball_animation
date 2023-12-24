export class Point {
	public ang;
	public dang;
	public r;
	public x = 0;
	public y = 0;

	constructor(
		public radius: number,
		public width: number,
		public height: number
	) {
		this.ang = 2 * Math.PI * Math.random();
		this.dang = (-0.5 + Math.random()) / 10;
		this.r = (2 * this.radius) / 3;
		this.updatePosition();
	}

	updatePosition() {
		this.ang += this.dang;
		this.x = this.width / 2 + this.r * Math.cos(this.ang);
		this.y = this.height / 2 + this.r * Math.sin(this.ang);
	}

	update() {
		this.updatePosition();
	}
}
