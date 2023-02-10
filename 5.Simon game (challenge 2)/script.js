var buttonColours = ["green", "red", "yellow", "blue"];
var sequenciaCerta = [];
var sequenciaPlayer = [];
var level = 1;
var gameOver = true;


$(document).on("keypress", function() {
    if(gameOver){
        gameOver = false;
        $("#level-title").text("level "+level);
        nextButton();
    }
});



$(document).on("click", ".btn", function() {
    playAudio(this.id);
    playAnimation(this.id);
    sequenciaPlayer.push(this.id);
    checkAnswer(sequenciaPlayer.length-1);
});



function checkAnswer(levelAtual) {
    // errou
    if (sequenciaCerta[levelAtual] != sequenciaPlayer[levelAtual]) {

        $("h1").text("Game Over, Press Any Key to Restart");

        $("body").toggleClass("game-over");
        setTimeout(function(){
            $("body").toggleClass("game-over");
        }, 100);  

        playAudio("wrong");
        restart();        
    } 
    
    // acertou a sequência
    else if (sequenciaCerta.length == sequenciaPlayer.length) {
        $(".btn").off("click");
        sequenciaPlayer = [];
        level++;
        $("#level-title").text("Level "+level);
        nextButton();
    }
}

function nextButton() {

    setTimeout(function(){

        sequenciaPlayer = [];
        level++;
        colorBtn = buttonColours[randomInt(1, 3)];
        sequenciaCerta.push(colorBtn);

        $("#" + colorBtn).fadeIn(100).fadeOut(100).fadeIn(100);
        playAudio(colorBtn);

    }, 300);   
}



function playAudio(song){
    audio = new Audio("sounds/"+song+".mp3");  
    audio.play();
}



function playAnimation(color){
    $("div#"+color).toggleClass("pressed");

    setTimeout(function(){
        $("#"+color).toggleClass("pressed");
    }, 100);
}



function restart() {
    gameOver = true;
    sequenciaCerta = [];
    sequenciaPlayer = [];
    level = 1;
}



function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}