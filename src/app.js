import generateMaze from './lib/generateMaze';
import game from './game'

const ctx = game.ctx;

//generateMaze(ctx, 100, 100);

ctx.beginPath()
ctx.rect(0, 0, 50, 50)
ctx.fillStyle = "black"
ctx.fill()
ctx.closePath();

ctx.beginPath()
ctx.rect(50, 0, 50, 50)
ctx.fillStyle = "red"
ctx.fill()
ctx.closePath();
