// console.log('Hi there!!!');

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const time = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        //console.log('timer started');
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        // console.log('timer is ticking');
        circle.setAttribute(
            'stroke-dashoffset',
            (perimeter * timeRemaining) / duration - perimeter
        );
        //currentoffset = currentoffset - 1;
    },
    onComplete() {
        // console.log('completed');
    }
});