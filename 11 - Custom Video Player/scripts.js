const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

console.log(toggle)

function togglePlay() {
  const method = video.paused? 'play' : 'pause';
  method === 'play'? toggle.innerHTML = '||' : toggle.innerHTML = '►';
  video[method]();
}

toggle.addEventListener('click',togglePlay);
video.addEventListener('click', togglePlay);