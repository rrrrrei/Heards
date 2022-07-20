'use strict';

// 要素
const Magic1 = new Audio('.assets/Magic1.mp3');
const play = document.getElementById('play');
Audio.currentTime = 0;
Audio.loop = true;

// 再生
document.body.addEventListener('keydown',
event => {
    if (event.key === 'v') {
       Magic1.play();
    }
});