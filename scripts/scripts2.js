var words = ["gatto", "cane", "calcio", "pallavolo", "sport", "cibo", "pizza"];
var startxt = document.getElementById("start-text");
var inputValue = document.getElementById("inputWord");
var wordSpawner = document.getElementById("wordSpawner");
var typedWord;
var playing = false;
var intervalId;

function startGame() {
    startxt.classList.add("hide");
    playing = true;
    inputValue.focus();
    gameLoop();
    inputValue.addEventListener('keydown', handleKeyPress);
}

function generateWord() {
    var p = document.createElement("p");
    p.classList.add("spwn-words");
    p.style.gridRowStart = randomRow();
    p.textContent = randomWord();
    wordSpawner.appendChild(p);

    setTimeout(() => {
        if (wordSpawner.contains(p)) {
            wordSpawner.removeChild(p);
        }
    }, 4000); // Rimuove la parola dopo 4 secondi (tempo dell'animazione)
}

function handleKeyPress(event) {
    if (event.key === 'Enter' && playing) {
        typedWord = inputValue.value;
        inputValue.value = ''; // Clear the input field
        checkTypedWord(typedWord);
    }
}

function checkTypedWord(word) {
    var spawnedWords = document.querySelectorAll(".spwn-words");
    spawnedWords.forEach(spawnedWord => {
        if (spawnedWord.textContent === word) {
            wordSpawner.removeChild(spawnedWord);
        }
    });
}

function randomWord() {
    var n = Math.floor(Math.random() * words.length);
    return words[n];
}

function randomRow() {
    var nrow = Math.floor(Math.random() * 10) + 1;
    return nrow;
}

function gameLoop() {
    if (playing) {
        generateWord();
        intervalId = setTimeout(gameLoop, 2000); // Genera una nuova parola ogni 2 secondi
    }
}

function stopGame() {
    playing = false;
    clearTimeout(intervalId);
    inputValue.removeEventListener('keydown', handleKeyPress);
}

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopGame();
    } else if (playing) {
        gameLoop();
    }
});


//phobospain22333