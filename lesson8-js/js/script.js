'use strict';

alert('Меня загрузили!');

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

};

const btn3Handler = () => {

};

const btn4Handler = () => {

};

const btn5Handler = () => {

};

const btn6Handler = () => {

};

const btn7Handler = () => {

};

const btn8Handler = () => {

};

const btn9Handler = () => {

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