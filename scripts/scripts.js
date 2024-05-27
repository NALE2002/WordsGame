var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza"];  //7
var startxt = document.getElementById("start-text");
var inputValue = document.getElementById("inputWord");
var wordSpawner = document.getElementById("wordSpawner");
// var p = document.createElement("p");
var typedWord; 
var playing = false;
var intervalID;
var hp = 3;


function startGame(){
    startxt.classList.add("hide");
    playing = true;
    inputValue.focus();
    gameLoop();
    endGame();
    inputValue.addEventListener('keydown',handleEvent);
}

function gameLoop(){
    if(playing){
        generateWord();
        intervalID = setTimeout(gameLoop(),2000);
    }
}

function generateWord(){
    var p = document.createElement("p");
    p.classList.add("spwn-words");
    p.style.gridRowStart = randomRow();
    p.textContent = randomWord();
    wordSpawner.appendChild(p);
    
    setTimeout(() => {
        if (wordSpawner.contains(p)) {
            wordSpawner.removeChild(p);
            hp--;
        }
    }, 4000); // Rimuove la parola dopo 4 secondi (tempo dell'animazione)
}

function handleEvent(event){
    if(event.key === 'Enter' && playing){
        inputValue = '';


    }
}

function checkTypedWord(word){
    // if(typedWord === word)

        
}

function randomWord(){
    var n = Math.floor(Math.random() * words.length);
    return words[n];
}

function randomRow(){
    var nrow = Math.floor(Math.random() * 10) + 1;
    return nrow;
}

function endGame(){
    if(hp == 0){ 
        while(wordSpawner.firstChild){
            wordSpawner.firstChild.remove();
        }
        playing = false;
        clearTimeout(intervalId);
        inputValue.removeEventListener('keydown', handleKeyPress);
    }
}