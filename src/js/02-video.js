import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
const saveTime = localStorage.getItem(STORAGE_KEY);

const onPlay = data => {
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('play', throttle(onPlay, 1000));

player.setCurrentTime(+saveTime).then(function (seconds) {
  seconds = +saveTime;
});
