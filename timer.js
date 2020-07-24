class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }
    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        //console.log('Time to start the timer');
        this.tick(); //setInterval calls after the one second, to rresolve this -- we calling the tick function manually
        this.interval = setInterval(this.tick, 10);
        //console.log(interval);  interval to implement the clearInterval Method
    };
    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        //console.log('tick');

        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            // const timeRem = parseFloat(this.durationInput.value); // converting  to float as inputvalue will be stored in strings
            // this.durationInput.value = timeRem - 1;
            this.timeRemaining = this.timeRemaining - 0.01;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }

    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}