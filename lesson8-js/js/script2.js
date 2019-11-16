'use strict';

let x = 0;
let opacity = 1;
let width = 200;
let height = 100;
let borderRadius = 0;
let rotateZ = 0;

let dx = 5, dop = 0.01, dwh = 5, dbr = 1, drz = 1;
let isMove = false, isSize = false, 
  isOpacity = false, isBorderRadius = false, isRotateZ = false;

const loop = () => {
  if (isMove)
    x += dx;

  if (isOpacity)
    opacity -= dop;

  if (isSize) {
    width += dwh;
    height += dwh;
  }

  if (isBorderRadius) 
    borderRadius += dbr;

  if (isRotateZ)
    rotateZ += drz;

  block.style.marginLeft = x + 'px';
  block.style.opacity = opacity;
  block.style.width = width + 'px';
  block.style.height = height + 'px';
  block.style.borderRadius = borderRadius + '%';
  block.style.transform = 'rotateZ(' + rotateZ + 'deg)';

  if (opacity > 1 || opacity < 0)
    dop = -dop;

  if (width > 400 && height > 200 || width < 100 && height < 50)
    dwh = -dwh;

  if (x < 0 || x + width > screen.width)
    dx = -dx;

  if (borderRadius < 0 || borderRadius > 50)
    dbr = -dbr;

  if (rotateZ > 180 || rotateZ < 0)
    drz = -drz;

  requestAnimationFrame(loop);
};

loop();

const btn1Handler = () => {
  if (isMove)
    isMove = false;
  else
    isMove = true;
};

const btn2Handler = () => {
  if (isSize)
    isSize = false;
  else
    isSize = true;
};

const btn3Handler = () => {
  if (isOpacity)
    isOpacity = false;
  else
    isOpacity = true;
};

const btn4Handler = () => {
  if (isBorderRadius)
    isBorderRadius = false;
  else
    isBorderRadius = true;
};

const btn5Handler = () => {
  if (isRotateZ)
    isRotateZ = false;
  else
    isRotateZ = true;
};


btn1.addEventListener('click', btn1Handler);
btn2.addEventListener('click', btn2Handler);
btn3.addEventListener('click', btn3Handler);
btn4.addEventListener('click', btn4Handler);
btn5.addEventListener('click', btn5Handler);
