var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza",
"divertente","palestra","perfetto","random","mongolfiera","videogiochi","animali","punta","adrenalina"];  //7
var startxt = document.getElementById("start-text"); //"start" text at the beginning of the page/game
var inputValue = document.getElementById("inputWord"); //input for the words to write
var wordSpawner = document.getElementById("wordSpawner"); //container of the words
var starth2 = document.getElementById("starth2");
var typedWord; //typed word 
var playing = false; //current state of the game: if its currently playing or not
var intervalID; //decides how many seconds for a new word
var countDown; //countdown after clicking the "start"
var hp = 3; //how many lifes you have before losing
var correctWord = false;
var wordsGuessedRight = 0;

//Aggiungere hp a schermo e wordsguessedright
//aggiungere tasto try again sotto game over 
//fine


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
        let interval = 2000;
        if(wordsGuessedRight > 10) interval = 1500;
        if(wordsGuessedRight > 20) interval = 1000;
        setTimeout(gameLoop, interval);
    }
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
            wordsGuessedRight++;
            console.log("parole corrette: ",wordsGuessedRight);
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
            if(hp === 0)
                endGame();
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
    var allTags_words = document.querySelectorAll(".spwn-words");
    // console.log("initial word: ",words[n]);
    allTags_words.forEach(allTag_word => {
        while(allTag_word.textContent == words[n]){
            n = Math.floor(Math.random() * words.length);
            // console.log("final word: ",words[n]);
        }
    });
    return words[n];
}

function randomRow(){
    var nrow = Math.floor(Math.random() * 10) + 1;
    var allTags_rows = document.querySelectorAll(".spwn-words");
    // console.log("initial nrow: ",a);
    allTags_rows.forEach(allTag_row =>{ 
        while(allTag_row.style.gridRowStart == nrow){ 
            nrow = Math.floor(Math.random() * 10) + 1;
            // console.log("changed nrow: ",a);
        }
    });
    return nrow;
}
