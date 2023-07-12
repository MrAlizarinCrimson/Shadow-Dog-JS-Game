const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = "images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const stagerFrames = 5;
const spriteAnimations = [];
const animationStates = [
	{
		name: 'idle',
		frames: 7,
	}
	{
		name: 'jump',
		frames: 7,
	}
]

function animate(){
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	//gameframe divided by stagerframes means we will have to increase gameframe 5 times before we get to run
	let position = Math.floor(gameFrame/stagerFrames) % 6;
	frameX = spriteWidth * position;
	ctx.drawImage(playerImage, frameX, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	

	gameFrame++;
	requestAnimationFrame(animate);
};
animate();
