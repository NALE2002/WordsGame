var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza"];  //7
var startxt = document.getElementById("start-text"); //"start" text at the beginning of the page/game
var inputValue = document.getElementById("inputWord"); //input for the words to write
var wordSpawner = document.getElementById("wordSpawner"); //container of the words
var starth2 = document.getElementById("starth2");
var typedWord; //typed word XD
var playing = false; //current state of the game: if its currently playing or not
var intervalID; //decides how many seconds for a new word
var countDown; //countdown after clkicking the "start"
var hp = 3; //how many lifes you have before losing
var correctWord = false;
//clearTimeout(intervalId); servira' per generare parole piu' fast ;) 

/*fixare funzione randomrow in modo che 
non possa spawnare una parola sulla stessa riga*/ 



function startGame(){
    startxt.removeChild(starth2);
    playing = true;
    inputValue.focus();
    gameLoop();
    inputValue.addEventListener('keydown',handleEvent);

}

function gameLoop(){
    if(playing){
        generateWord();
        intervalID = setTimeout(gameLoop,2000); //generates a word every 2 seconds
    }
    console.log("current hp: ",hp);
    endGame();
}

function handleEvent(event){
    if(event.key === 'Enter' && playing){
        typedWord = inputValue.value; 
        // console.log("parola scritta :", typedWord);
        checkWord(typedWord);
        if(correctWord){
            inputValue.value = '';
            correctWord = false;
        }
    }
}
    
function checkWord(word){
    var allWords = document.querySelectorAll(".spwn-words");
    allWords.forEach((allWord) => {
        if(allWord.textContent === word){
            wordSpawner.removeChild(allWord);
            correctWord = true;
        }
    }); 
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
    }, 4000); //removes word after 4 seconds
    
}

function endGame(){
    if(hp === 0 && playing){
        playing = false;
        while(wordSpawner.firstChild){
            wordSpawner.firstChild.remove();
        }
        var gameOver = document.createElement('h3');
        gameOver.classList.add("info-text");
        gameOver.textContent = 'Game Over :C';
        startxt.appendChild(gameOver);
        inputValue.removeEventListener('keydown', handleEvent);
    }
}

function randomWord(){ 
    var n = Math.floor(Math.random() * words.length);
    return words[n];
}

function randomRow(){
    var nrow = Math.floor(Math.random() * 10) + 1;
    var checkRows = document.querySelectorAll(".spwn-words");
    // console.log("initial nrow",nrow);
    checkRows.forEach(checkRow =>{
        while(checkRow.style.gridRowStart == nrow){
            nrow = Math.floor(Math.random() * 10) + 1;
            // console.log("changed nrow: ",nrow);
        }
    });
    return nrow;
}