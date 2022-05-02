import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};
player.on('play', throttle(onPlay, 1000));

const saveTime = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(Number(saveTime)).then(function(seconds) {
    seconds = Number(saveTime);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('Error time');
            break;

        default:
            console.log('Error other');
            break;
    }
});

