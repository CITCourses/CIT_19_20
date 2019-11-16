'use strict';

// alert('Меня загрузили!');

const btnHandler = () => {
  alert('Привет, друг!');
};

const blackHandler = () => {
  alert('Я - черный квадрат Малевича!');
};

const pinkHandler = () => {
  alert('Не покидай меня!');
};

const greenHandler = () => {
  alert('Мир во всем мире!')
};

btn.addEventListener('click', btnHandler);
black.addEventListener('mousemove', blackHandler);
pink.addEventListener('mouseout', pinkHandler);
green.addEventListener('dblclick', greenHandler);

const btn1Handler = () => {
  if (block.style.opacity === '1' || block.style.opacity === '')
    block.style.opacity = 0;
  else 
    block.style.opacity = 1;
};

const btn2Handler = () => {
  if (block.style.backgroundColor === 'rgb(0, 255, 0)' || block.style.backgroundColor === '')
    block.style.backgroundColor = 'rgb(255, 0, 0)';
  else 
    block.style.backgroundColor = 'rgb(0, 255, 0)';
};

const btn3Handler = () => {
  if (block.style.borderColor === 'rgb(0, 0, 0)' || block.style.borderColor === '')
    block.style.borderColor = 'rgb(0, 0, 255)';
  else 
    block.style.borderColor = 'rgb(0, 0, 0)';
};

const btn4Handler = () => {
  if (block.style.borderWidth === '1px' || block.style.borderWidth === '')
    block.style.borderWidth = '10px';
  else 
    block.style.borderWidth = '1px';
};

const btn5Handler = () => {
  if (block.style.width === '200px' || block.style.width === '')
    block.style.width = '400px';
  else 
    block.style.width = '200px';
};

const btn6Handler = () => {
  if (block.style.height === '100px' || block.style.height === '')
    block.style.height = '200px';
  else 
    block.style.height = '100px';
};

const btn7Handler = () => {
  if (block.style.marginLeft === '0px' || block.style.marginLeft === '')
    block.style.marginLeft = '100px';
  else 
    block.style.marginLeft = '0px';
};

const btn8Handler = () => {
  if (block.style.marginTop === '0px' || block.style.marginTop === '')
    block.style.marginTop = '100px';
  else 
    block.style.marginTop = '0px';
};

const btn9Handler = () => {
  if (block.style.fontSize === '14px' || block.style.fontSize === '')
    block.style.fontSize = '30px';
  else 
    block.style.fontSize = '14px';
};


btn1.addEventListener('click', btn1Handler);
btn2.addEventListener('click', btn2Handler);
btn3.addEventListener('click', btn3Handler);
btn4.addEventListener('click', btn4Handler);
btn5.addEventListener('click', btn5Handler);
btn6.addEventListener('click', btn6Handler);
btn7.addEventListener('click', btn7Handler);
btn8.addEventListener('click', btn8Handler);
btn9.addEventListener('click', btn9Handler);