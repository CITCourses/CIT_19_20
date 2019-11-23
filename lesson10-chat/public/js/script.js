'use strict';

const socket = io();

const cash = [];
let username = '';

const sendBtnHandler = (e) => {
  e.preventDefault();
  const message = username + ': ' + in1.value;
  socket.emit('send message', message);
  cash.push(in1.value);
  in1.value = '';
};

socket.on('get message', (msg) => {
  const li = document.createElement('li');
  li.innerHTML = msg;
  display.appendChild(li);
});

const in1Down = (e) => {
  if (e.keyCode === 38) {
    in1.value = cash[cash.length - 1];
  }
};

const usrBtnHandler = (e) => {
  e.preventDefault();
  username = usrIn.value;
  usrForm.style.display = 'none';
  display.style.display = 'block';
};

sendBtn.addEventListener('click', sendBtnHandler);
in1.addEventListener('keydown', in1Down);
usrBtn.addEventListener('click', usrBtnHandler);