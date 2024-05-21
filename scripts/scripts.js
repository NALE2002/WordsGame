var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza"];  //7
var startxt = document.getElementById("start-text");
var rdmWord = document.getElementById("rndm-word");
var inputValue = document.getElementById("inputWord");
var typedWord;
var n = Math.floor(Math.random() * words.length);
var playing = false;

spawnedWord = words;

console.log(spawnedWord[n]);

function start(){
    startxt.classList.add("hide");
    playing = true;
    game();
}

function game(){
    if(playing == true)
        rdmWord.textContent = spawnedWord[n];
}

function keyPressed(){
    inputValue.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter'){
            console.log('Enter key pressed!');
            typedWord = inputValue.value;
            console.log(typedWord);
        }
    });
}
