'use strict';

function Ball (x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = 5;
  this.dy = 5;
  this.pause = true;
}

Ball.prototype.draw = function(gameSize) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
  ctx.closePath();
  ctx.fill();
};

Ball.prototype.update = function(gameSize) {
  if (!this.pause) {
    this.x += this.dx;
    this.y += this.dy;
  }

  if (KEYS[SPACE])
    this.pause = false;

  if (this.x + this.radius > gameSize.w || this.x - this.radius < 0)
    this.dx = -this.dx;

  if (this.dy > 0 && this.x + this.radius > plat.x 
    && this.x - this.radius < plat.x + plat.w && this.y > plat.y)
    this.dy = -this.dy;

  if (this.dy < 0 && this.x + this.radius > plat2.x 
    && this.x - this.radius < plat2.x + plat2.w && this.y < plat2.y)
    this.dy = -this.dy;

  if (this.y - this.radius > gameSize.h + this.radius) 
    score.firstPlayer++;

  if (this.y + this.radius < 0 - this.radius) 
    score.secondPlayer++;

  if (this.y - this.radius > gameSize.h + this.radius 
    || this.y + this.radius < 0 - this.radius) {
    this.x = gameSize.w / 2;
    this.y = gameSize.h / 2;
    this.pause = true;
    const rnd = Math.round(Math.random()*3);
    switch (rnd) {
      case 0:
        this.dx = 5;
        this.dy = 5;
        break;
      case 1:
        this.dx = -5;
        this.dy = 5;
        break;
      case 2:
        this.dx = 5;
        this.dy = -5;
        break;
      case 3:
        this.dx = -5;
        this.dy = -5;
        break;
    }
  }

};
