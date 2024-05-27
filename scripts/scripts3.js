var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza"];  //7
var startxt = document.getElementById("start-text"); //"start" text at the beginning of the page/game
var inputValue = document.getElementById("inputWord"); //input for the words to write
var wordSpawner = document.getElementById("wordSpawner"); //container of the words
var typedWord; //typed word XD
var playing = false; //current state of the game: if its currently playing or not
var intervalID; //decides how many seconds for a new word
var countDown; //countdown after clkicking the "start"
var hp = 3; //how many lifes you have before losing


//aggiungere un modo per finire il loop


function startGame(){
    startxt.remove();
    playing = true;
    inputValue.focus();
    gameLoop();

}

function gameLoop(){
    if(playing){
        generateWord();
        intervalID = setTimeout(gameLoop,2000); //generates a word every 2 seconds
    }
    console.log(hp)
    endGame();
}

function generateWord(){
    var p = document.createElement('p');
    p.classList.add("spwn-words");
    p.style.gridRowStart = randomRow();
    p.textContent = randomWord();
    wordSpawner.appendChild(p); //creates a <p> tag containing a random word and row inside the container for words

    setTimeout(() => {
        if(wordSpawner.contains(p)){
            wordSpawner.removeChild(p);
            hp--;
        }
    }, 4000); //cancella parola dopo 4 secondi
    
}

function endGame(){
    if(hp == 0){
        playing = false;
        while(wordSpawner.firstChild){
            wordSpawner.firstChild.remove();
        }
       
    }
}

function randomWord(){
    var n = Math.floor(Math.random() * words.length);
    return words[n];
}

function randomRow(){
    var nrow = Math.floor(Math.random() * 10) + 1;
    return nrow;
}