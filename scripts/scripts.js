var words = ["gatto","cane","calcio","pallavolo","sport","cibo","pizza"];  //7
var spawnedWord = document.getElementsByClassName("spw-words").innerHTML;
var text = document.getElementsByClassName("text-game").innerHTML;
var startxt = document.getElementById("container-start");
var n = Math.floor(Math.random() * words.length);
var playing = false;

spawnedWord = words;

console.log(spawnedWord[n]);

function start(){
    startxt.classList.add("hide");
    playing = true;
}



