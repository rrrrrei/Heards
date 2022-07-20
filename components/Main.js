function keycodeOutput(e) {
  const keyAction = document.querySelector(`.key[data-key="${e.key}"]`);
  const audioAction = document.querySelector(`audio[data-key="${e.key}"]`);

  keyAction.classList.add('playing');
  audioAction.play();
}
window.addEventListener('keydown', keycodeOutput);

function keycodeRemove(e) {
  const keyAction = document.querySelector(`.key[data-key="${e.key}"]`);
  const audioAction = document.querySelector(`audio[data-key="${e.key}"]`);

  keyAction.classList.remove('playing');
  audioAction.pause();
}
window.addEventListener('keyup', keycodeRemove);