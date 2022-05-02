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

    // ----------------------------------------------------

    const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
};
player.on('play', throttle(onPlay, 500));

const savePlayedSeconds = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(Number(savePlayedSeconds)).then(function(seconds) {
    seconds = Number(savePlayedSeconds);
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            console.log('Time Error');
            break;

        default:
            console.log('Other Error');
            break;
    }
});
