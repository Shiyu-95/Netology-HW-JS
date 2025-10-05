const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speedDisplay = document.createElement('div');
speedDisplay.id = 'clicker__speed';
speedDisplay.textContent = 'Средняя скорость: 0.00 кликов/сек';
counter.parentNode.insertBefore(speedDisplay, counter.nextSibling);

let clickCount = 0;
let startTime = 0;

cookie.onclick = function () {
    const currentTime = new Date().getTime();

    clickCount++;
    counter.textContent = clickCount;

    if (clickCount === 1) {
        startTime = currentTime;
    }

    if (clickCount % 2 === 0) {
        cookie.width += 20;
        cookie.height += 20;
    } else {
        cookie.width -= 20;
        cookie.height -= 20;
    }


    if (clickCount > 0 && startTime > 0) {
        const elapsedTime = (currentTime - startTime) / 1000;
        if (elapsedTime > 0) {
            const averageSpeed = clickCount / elapsedTime;
            speedDisplay.textContent = `Средняя скорость: ${averageSpeed.toFixed(2)} кликов/сек`;
        }
    }
}