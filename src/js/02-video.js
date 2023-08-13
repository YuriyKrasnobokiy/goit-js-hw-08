import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key = 'videoplayer-current-time';

player.on('timeupdate', throttle(handlerOnPlay, 1000));
function handlerOnPlay(data) {
  const time = data.seconds;
  localStorage.setItem(key, time);
}

if (localStorage.getItem(key)) {
  player.setCurrentTime(localStorage.getItem(key));
}
