var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza"];  //7
var startxt = document.getElementById("start-text");
var inputValue = document.getElementById("inputWord");
var p = document.createElement("p");
var spawner = document.getElementById("wordSpawner").append(p);
var typedWord;
var n = Math.floor(Math.random() * words.length);
var nrow = Math.floor(Math.random() * 10); 
var playing = false;
var hearts = 3;
spawnedWord = words;


function start(){
    startxt.classList.add("hide");
    playing = true;
    generateWord();
}

function generateWord(){
    if(playing == true){
        p;
        p.classList.add("spwn-words");
        p.style.gridRowStart = nrow;
        p.textContent = spawnedWord[n];
        console.log(p);
    }
}

function keyPressed(){
    inputValue.addEventListener('keydown',(event)=>{
        if(event.key === 'Enter' && playing == true){
            console.log('Enter key pressed!');
            typedWord = inputValue.value;
        }
    });
}


