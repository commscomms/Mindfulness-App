let seconds = 30;
let myInterval;
let isRunning = false;

function start() {
    if (isRunning == false) {
        isRunning = true;
        const time = document.getElementById("countdown");
        console.log("start");
        myInterval = setInterval(() => {
            time.innerHTML = seconds--;
            if (seconds < 0) clearInterval(myInterval);
        }, 1000);
    }
    else {
            if (seconds == 0) {
                isRunning = false;
            }
        }
}

function stop() {
    isRunning = false;
    clearInterval(myInterval);
    console.log("stop");
  }

function reset() {
    console.log("reset");
    seconds = 30;
}
