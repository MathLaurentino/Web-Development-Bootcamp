document.getElementById("refresh").onclick = refresh;

// recarrega a página com os valores gerados e com o respectivo vencedor
function refresh(){

    var num1 = Math.floor(Math.random() * 6)+ 1;
    var num2 =  Math.floor(Math.random() * 6)+ 1;

    var winner = document.querySelector("p");

    if (num1 > num2) {
        winner.innerHTML="Player 1 win";
    } else if (num2 > num1){
        winner.innerHTML="Player 2 win";
    } else {
        winner.innerHTML="The final score was a tie.";
    }

    var imgs = document.querySelectorAll("img");

    imgs[0].setAttribute("src", "images/dice"+ num1 +".png");
    imgs[1].setAttribute("src", "images/dice"+ num2 +".png");

}

// retorna um numero randomico entre min e max (incluindo os dois)
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

