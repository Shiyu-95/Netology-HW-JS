function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

const timer = document.getElementById("timer");
let timeLeft = parseInt(timer.textContent, 10);
let intervalId;
timer.textContent = formatTime(timeLeft);

const decreaseTimer = function () {

    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft >= 0) {
        timer.textContent = formatTime(timeLeft);
    }

    if (timeLeft <= 0) {
        clearInterval(intervalId);
        alert("Вы победили в конкурсе");
        triggerFileDownload();
    }
}

function triggerFileDownload() {
    const fileContent = "Твой комп заражен, спасибо за участие, лол :D";
    const fileType = 'text/plain';
    const blob = new Blob([fileContent], {type: fileType});
    const url = URL.createObjectURL(blob);

    const fileName = 'Атыначторасчитываллол.txt';
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.target = '_blank';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    URL.revokeObjectURL(url);
}

intervalId = setInterval(decreaseTimer, 1000);

