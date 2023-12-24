import { Point } from './modules/Point';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

const width = window.innerWidth;
const height = window.innerHeight;
let radius = 15;
const pointCount = 15;
let hue = 0;
let hueChange = 0.25;

const points: Point[] = [];

function initializeCanvas() {
	canvas.width = width;
	canvas.height = height;
	radius = Math.min(width, height) / 2;
	context.fillStyle = 'white';
	context.fillRect(0, 0, width, height);
}

function draw() {
	context.fillStyle = 'rgba(0, 0, 0, 0.04)';
	context.fillRect(0, 0, width, height);
	context.beginPath();
	context.moveTo((points[0].x + points[pointCount - 1].x) / 2, (points[0].y + points[pointCount - 1].y) / 2);

	for (let p = 0; p < pointCount; p++) {
		const q = (p + 1) % pointCount;
		context.quadraticCurveTo(
			points[p].x,
			points[p].y,
			(points[p].x + points[q].x) / 2,
			(points[p].y + points[q].y) / 2
		);
		points[p].updatePosition();
	}

	const hueValue = Math.round(180 + hue);
	context.strokeStyle = `hsl(${hueValue}deg, 100%, 70%)`;
	context.shadowBlur = (radius * 30) / 432;
	context.shadowColor = `hsl(${hueValue}deg, 100%, 50%)`;
	context.lineWidth = (radius * 2) / 432;

	context.stroke();
	context.shadowColor = 'transparent';
	hue += hueChange;
	if (hue >= 170 || hue <= 0) hueChange = -hueChange;

	requestAnimationFrame(draw);
}

function initialize() {
	initializeCanvas();
	window.onresize = initializeCanvas;

	for (let i = 0; i < pointCount; i++) {
		points.push(new Point(radius, width, height));
	}

	draw();
}

window.onload = initialize;
