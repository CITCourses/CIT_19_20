'use strict';

const gameSize = {
  w: 800,
  h: 600
};

canv.width = gameSize.w;
canv.height = gameSize.h;

const ctx = canv.getContext('2d');

const score = {
  firstPlayer: 0,
  secondPlayer: 0,
};

const ball = new Ball(gameSize.w / 2, gameSize.h / 2, 10);
const plat = new Platform(gameSize.w / 2 - 50, 
  gameSize.h - 10, 100, 10, 0);
const plat2 = new Platform(gameSize.w / 2 - 50, 
  0, 100, 10, 1);

const draw = () => {
  ctx.clearRect(0, 0, gameSize.w, gameSize.h);
  ctx.beginPath();
  ctx.moveTo(0, gameSize.h / 2);
  ctx.lineTo(gameSize.w, gameSize.h / 2);
  ctx.closePath();
  ctx.stroke();

  ctx.font = '30px Arial';
  ctx.strokeText(`${ score.firstPlayer } : ${ score.secondPlayer }`, 10, 50);

  ball.draw(gameSize);
  plat.draw(gameSize);
  plat2.draw(gameSize);
};

const update = () => {
  ball.update(gameSize);
  plat.update(gameSize);
  plat2.update(gameSize);
};

const keyDownHandler = (e) => {
  KEYS[e.keyCode] = true;
};

const keyUpHandler = (e) => {
  KEYS[e.keyCode] = false;
};

const loop = () => {
  draw();
  update();

  requestAnimationFrame(loop);
};

loop();

window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);

/*
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.lineTo(200, 50);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(250, 100, 20, 0, 2*Math.PI);
ctx.closePath();
ctx.fill();

ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.rect(200, 200, 100, 50);
ctx.closePath();
ctx.fill();

ctx.font = '48px Arial';
ctx.fillText('Vlas where my Pivas', 10, 50);
*/