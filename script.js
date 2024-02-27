// clickSpeed.js
let clicks = 0;
let startTime;

function handleClick() {
    clicks++;

    if (!startTime) {
        startTime = new Date();
        setTimeout(calculateSpeed, 7000); // 7 seconds
    }
}

function calculateSpeed() {
    const endTime = new Date();
    const elapsedTime = (endTime - startTime) / 1000; // in seconds

    const speed = clicks / elapsedTime;

    document.getElementById('display').innerText = `${speed.toFixed(2)} clicks per second in 7 seconds`;
    resetClickData();
}

function resetClickData() {
    clicks = 0;
    startTime = null;
}

function reset() {
    document.getElementById('display').innerText = `Speed Display`;
}

document.getElementById('incrementer').addEventListener('click', handleClick);
document.getElementById('reset').addEventListener('click', reset); // Corrected event listener
