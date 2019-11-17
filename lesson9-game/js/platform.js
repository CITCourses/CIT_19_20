'use strict';

function Platform (x, y, w, h, controll) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.speed = 10;
  this.controll = controll;
}

Platform.prototype.draw = function(gameSize) {
  ctx.fillRect(this.x, this.y, this.w, this.h);
};

Platform.prototype.update = function(gameSize) {
  if (this.controll === 0) {
    if (KEYS[RIGHT])
      this.x += this.speed;

    if (KEYS[LEFT])
      this.x -= this.speed;
  }   

  if (this.controll === 1) {
    if (KEYS[D])
      this.x += this.speed;

    if (KEYS[A])
      this.x -= this.speed;
  }

  if (this.x + this.w > gameSize.w)
    this.x -= this.speed;

  if (this.x < 0)
    this.x += this.speed;  
};