document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 0;
    let timeLeft = 10;
    let timerId;
    let musicPlayed = false;
    const counterDiv = document.getElementById('counter');
    const backgroundMusic = document.getElementById('backgroundMusic');

    // Zene indítás
    function startMusic() {
        backgroundMusic.play();
        musicPlayed = true;
    }

    backgroundMusic.volume = 0.2;

    //Kép pozíció generálás --> ez a rész nem saját alkotás, ha van valami egyszerűbb módja arra kíváncsi lennék :D
    function checkOverlap(x, y, usedCoordinates) {
        return usedCoordinates.some(coord => {
            return x < coord.x + 100 && x + 100 > coord.x && y < coord.y + 100 && y + 100 > coord.y;
        });
    }

    function generatePosition(usedCoordinates) {
        let x, y;
        do {
            x = Math.random() * (window.innerWidth - 100);
            y = Math.random() * (window.innerHeight - 100);
        } while (checkOverlap(x, y, usedCoordinates));
        return { x, y };
    }

    function placeImages() {
        const divs = document.querySelectorAll('body > div:not(#counter, #startMessage)');
        const usedCoordinates = [];

        divs.forEach(div => {
            const { x, y } = generatePosition(usedCoordinates);
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
            usedCoordinates.push({ x, y });
        });
    }

    // Időzítő
    function startTimer() {
        counterDiv.innerHTML = `${counter + 1}/15 - ${timeLeft}`;
        timerId = setInterval(() => {
            timeLeft--;
            counterDiv.innerHTML = `${counter + 1}/15 - ${timeLeft}`;
            if (timeLeft <= 0) {
                endGame('A maffiavezér elmenekült!');
            }
        }, 1000);
    }

    // Visszaszámláló
    function resetGame() {
        timeLeft = 10 - Math.min(counter, 8);
        placeImages();
    }

    // Játék vége
    function endGame(message) {
        clearInterval(timerId);
        alert(message);
        window.location.reload();
    }

    // Kattintás , Zene be, lépések, játék vége
    function handleImageClick(clickedId) {
        if (!musicPlayed) {
            startMusic();
        }

        if (clickedId === 'orban') {
            counter++;
            if (counter === 14) {
                endGame('Sajnáljuk, a TEK terrorizmus miatt letartóztatott téged!');
            } else {
                clearInterval(timerId);
                resetGame();
                startTimer();
            }
        } else {
            endGame('Ő nem a maffiavezér!');
        }
    }

    document.querySelectorAll('body > div:not(#counter)').forEach(div => {
        div.addEventListener('click', () => handleImageClick(div.id));
    });

    setTimeout(() => {
        document.getElementById('startMessage').style.display = 'none';
    }, 3000);

    resetGame();
    startTimer();
});