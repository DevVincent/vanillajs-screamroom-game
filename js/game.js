var ctx = null;
var gameMap = [
	5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 4,
	5, 1, 1, 1, 8, 8, 8, 8, 8, 1, 1, 1, 4, 1, 1, 8, 1, 1, 1, 8, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4,
	4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 8, 1, 8, 1, 8, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 1, 1, 1, 1, 8, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 8, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1, 5, 1, 1, 5, 1, 1, 1, 5, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 8, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 8, 1, 2, 3, 9, 9, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 8, 1, 2, 3, 9, 9, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 8, 1, 2, 3, 3, 3, 3, 3, 2, 1, 1, 5, 1, 1, 5, 1, 1, 0, 5, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 5, 5, 9, 6, 6, 6, 6, 6, 9, 5, 5, 5, 5, 1, 5, 1, 1, 1, 5, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 8, 8, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 8, 1, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 1, 1, 2, 3, 9, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 1, 1, 2, 3, 9, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 1, 1, 2, 3, 9, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 9, 1, 1, 2, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 5, 5, 1, 1, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 5, 5, 9, 6, 6, 6, 6, 6, 9, 5, 5, 5, 5, 1, 1, 5, 5, 5, 4, 4, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 4, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 1, 1, 1, 1, 4, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 5, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 5, 4, 4, 4, 5, 5, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	4, 1, 2, 3, 3, 3, 3, 3, 3, 3, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
	5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 4,
	5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 9, 6, 6, 5, 6, 6, 9, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
	7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7
];

var tileW = 40, tileH = 40;
var mapW = 35, mapH = 45;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

var tileset = null, tilesetURL = "/gameImg/tileset.png", tilesetLoaded = false;

var floorTypes = {
	solid: 0,
	path: 1,
	water: 2
};

var directions = {
	up: 0,
	right: 1,
	down: 2,
	left: 3
};

this.direction = directions.up;
this.sprites = {};
this.sprites[directions.up] = [{ x: 0, y: 120, w: 30, h: 30 }];
this.sprites[directions.right] = [{ x: 0, y: 150, w: 30, h: 30 }];
this.sprites[directions.down] = [{ x: 0, y: 180, w: 30, h: 30 }];
this.sprites[directions.left] = [{ x: 0, y: 210, w: 30, h: 30 }];

var tileTypes = {
/*CrackecStone*/   	0: { colour: "#e6f3ff", floor: floorTypes.path, sprite: [{ x: 0, y: 0, w: 40, h: 40 }] },
/*Stone*/			1: { colour: "#99ceff", floor: floorTypes.path, sprite: [{ x: 40, y: 0, w: 40, h: 40 }] },
/*BlackCarpet*/		2: { colour: "#00284d", floor: floorTypes.path, sprite: [{ x: 80, y: 0, w: 40, h: 40 }] },
/*RedCarpet*/		3: { colour: "#00284d", floor: floorTypes.path, sprite: [{ x: 120, y: 0, w: 40, h: 40 }] },
/*CobblestoneWall*/	4: { colour: "#39004d", floor: floorTypes.solid, sprite: [{ x: 160, y: 0, w: 40, h: 40 }] },
/*ChiseledStone*/	5: { colour: "#004d4d", floor: floorTypes.solid, sprite: [{ x: 200, y: 0, w: 40, h: 40 }] },
/*Glass*/			6: { colour: "#31004d", floor: floorTypes.solid, sprite: [{ x: 0, y: 40, w: 40, h: 40 }] },
/*Grass*/			7: { colour: "#34004d", floor: floorTypes.solid, sprite: [{ x: 40, y: 40, w: 40, h: 40 }] },
/*Bookshelf*/		8: { colour: "#33004d", floor: floorTypes.solid, sprite: [{ x: 80, y: 40, w: 40, h: 40 }] },
/*Wood*/			9: { colour: "#32004d", floor: floorTypes.solid, sprite: [{ x: 120, y: 40, w: 40, h: 40 }] }
};

var keysDown = {
	37: false,
	38: false,
	39: false,
	40: false
};

var player = new Character();

var viewport = {
	screen: [0, 0],
	startTile: [0, 0],
	endTile: [0, 0],
	offset: [0, 0],
	update: function (px, py) {
		this.offset[0] = Math.floor((this.screen[0] / 2) - px);
		this.offset[1] = Math.floor((this.screen[1] / 2) - py);

		var tile = [
			Math.floor(px / tileW),
			Math.floor(py / tileH)
		];
		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0] / 2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1] / 2) / tileH);
		if (this.startTile[0] < 0) { this.startTile[0] = 0; }
		if (this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0] / 2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1] / 2) / tileH);

		if (this.endTile[0] >= mapW) { this.endTile[0] = mapW; }
		if (this.endTile[1] >= mapH) { this.endTile[1] = mapH; }
	}
};

function Character() {
	this.tileFrom = [1, 1];
	this.tileTo = [1, 1];
	this.timeMoved = 0;
	this.dimensions = [30, 30];
	this.position = [45, 45];
	this.delayMove = 100;
}
Character.prototype.placeAt = function (x, y) {
	this.tileFrom = [x, y];
	this.tileTo = [x, y];
	this.position = [((tileW * x) + ((tileW - this.dimensions[0]) / 2)),
	((tileH * y) + ((tileH - this.dimensions[1]) / 2))];
};
Character.prototype.processMovement = function (t) {
	if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }

	if ((t - this.timeMoved) >= this.delayMove) {
		this.placeAt(this.tileTo[0], this.tileTo[1]);
	}
	else {
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW - this.dimensions[0]) / 2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH - this.dimensions[1]) / 2);

		if (this.tileTo[0] != this.tileFrom[0]) {
			var diff = (tileW / this.delayMove) * (t - this.timeMoved);
			this.position[0] += (this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff);
		}
		if (this.tileTo[1] != this.tileFrom[1]) {
			var diff = (tileH / this.delayMove) * (t - this.timeMoved);
			this.position[1] += (this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}

	return true;
}

Character.prototype.canMoveTo = function (x, y) {
	if (x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
	if (tileTypes[gameMap[toIndex(x, y)]].floor != floorTypes.path) { return false; }
	return true;
};
Character.prototype.canMoveUp = function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1); };
Character.prototype.canMoveDown = function () { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1); };
Character.prototype.canMoveLeft = function () { return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]); };
Character.prototype.canMoveRight = function () { return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]); };

Character.prototype.moveLeft = function (t) { this.tileTo[0] -= 1; this.timeMoved = t; };
Character.prototype.moveRight = function (t) { this.tileTo[0] += 1; this.timeMoved = t; };
Character.prototype.moveUp = function (t) { this.tileTo[1] -= 1; this.timeMoved = t; };
Character.prototype.moveDown = function (t) { this.tileTo[1] += 1; this.timeMoved = t; };

function toIndex(x, y) {
	return ((y * mapW) + x);
}

window.onload = function () {
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	window.addEventListener("keydown", function (e) {
		if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function (e) {
		if (e.keyCode >= 37 && e.keyCode <= 40) { keysDown[e.keyCode] = false; }
	});

	viewport.screen = [document.getElementById('game').width,
	document.getElementById('game').height];

	tileset = new Image();
	tileset.onerror = function () {
		ctx = null;
		alert("Failed loading tileset.");
	};

	tileset.onload = function () { tilesetLoaded = true; };
	tileset.src = tilesetURL;

};

function drawGame() {
	if (ctx == null) { return; }
	if (!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;

	var sec = Math.floor(Date.now() / 1000);
	if (sec != currentSecond) {
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	if (!player.processMovement(currentFrameTime)) {
		if (keysDown[38] && player.canMoveUp()) { player.moveUp(currentFrameTime); }
		else if (keysDown[40] && player.canMoveDown()) { player.moveDown(currentFrameTime); }
		else if (keysDown[37] && player.canMoveLeft()) { player.moveLeft(currentFrameTime); }
		else if (keysDown[39] && player.canMoveRight()) { player.moveRight(currentFrameTime); }
	}

	viewport.update(
		player.position[0] + (player.dimensions[0] / 2),
		player.position[1] + (player.dimensions[1] / 2)
	);

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

	for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
		for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
			var tile = tileTypes[gameMap[toIndex(x, y)]];
			ctx.drawImage(tileset,
				tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				viewport.offset[0] + (x * tileW), viewport.offset[1] + (y * tileH),
				tileW, tileH);
		}
	}
	ctx.fillStyle = "#0000ff";
	ctx.fillRect(viewport.offset[0] + player.position[0],
		viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);

	ctx.fillStyle = "#ff0000";
	ctx.fillText("Health: " + framesLastSecond, 10, 20);
	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}