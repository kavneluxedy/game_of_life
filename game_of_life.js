var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var drawGrid = function (w, h) {
	ctx.canvas.width = w;
	ctx.canvas.height = h;

	for (x = 0; x <= w; x+10) {
		for (y = 0; y <= h; y+10) {
			ctx.moveTo(x, 0);
			ctx.lineTo(x, h);
			ctx.stroke();
			ctx.moveTo(0, y);
			ctx.lineTo(w, y);
			ctx.stroke();
		}
	}
};
function rdm(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function drawCells() {
	ctx.canvas.width = w;
	ctx.canvas.height = h;
	for (let x = 0; x <= w; x++) {
		for (let y = 0; y <= h; y++) {
			ctx.fillStyle = 'black';
			ctx.stroke(0, x, 0, y);
		}
	}
}

function generation() {
	setTimeout(generation, 50);
	clearTimeout(5000);
	
	drawGrid(800, 400, "grid");
	drawCells();
}