const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            deadCounter.textContent = Number(deadCounter.textContent) + 1;
        } else {
            lostCounter.textContent = Number(lostCounter.textContent) + 1;
        }

        checkGameStatus();
    };
}

function checkGameStatus() {
    const dead = Number(deadCounter.textContent);
    const lost = Number(lostCounter.textContent);

    if (dead >= 10) {
        alert('Вы победили!');
        resetGame();
    }

    if (lost >= 5) {
        alert('Вы проиграли!');
        resetGame();
    }
}

function resetGame() {
    deadCounter.textContent = 0;
    lostCounter.textContent = 0;
}