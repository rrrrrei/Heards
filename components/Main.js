'use strict';

// 要素
const Magic1 = new Audio('../assets/Magic1.mp3');

// 再生
document.body.addEventListener('keydown',
event => {
    if (event.key === 'v') {
       Magic1.play();
       Magic1.currentTime = 0;
       Magic1.loop = true;
    }
});

// 停止
document.body.addEventListener('keyup',
event => {
    if (event.key === 'v') {
       Magic1.pause();
    }
});