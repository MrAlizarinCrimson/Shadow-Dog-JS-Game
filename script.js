const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const playerImage = new Image();
playerImage.src = "images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;

let playerState = 'run';
//we can manipulate whole movements with playerState just from animate function//
let gameFrame = 0;
const stagerFrames = 5;
const spriteAnimations = [];
const animationStates = [
	{
		name: 'idle',
		frames: 7,
	},
	{
		name: 'jump',
		frames: 7,
	},
	{
		name: 'fall',
		frames: 7,
	},
	{
		name: 'run',
		frames: 9,
	},
	{
		name: 'dizzy',
		frames: 11,
	},
	{
		name: 'sit',
		frames: 5,
	},
	{
		name: 'roll',
		frames: 7,
	},
	{
		name: 'bite',
		frames: 7,
	},
	{
		name: 'ko',
		frames: 12,
	},
	{
		name: 'getHit',
		frames: 7,
	}
];
//forEach executes provided functions once for each array, Es6 syntax arrow function//
animationStates.forEach((state, index) => {
	let frames = {
		loc: [],
	}
	for (let j = 0; j < state.frames; j++){
		let positionX = j * spriteWidth;
		let positionY = index * spriteHeight;
		frames.loc.push({x: positionX, y: positionY});
	}
	spriteAnimations[state.name] = frames;
});
console.log(animationStates);
	
function animate(){
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	//gameframe divided by stagerframes means we will have to increase gameframe 5 times before we get to run//
	let position = Math.floor(gameFrame/stagerFrames) % spriteAnimations[playerState].loc.length;
	let frameX = spriteWidth * position;
	let frameY = spriteAnimations[playerState].loc[position].y;

	ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	

	gameFrame++;
	requestAnimationFrame(animate);
};
animate();

