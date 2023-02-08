
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})

for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
        //handleClick(this.value);
    })
}

function makeSound(letter)
{
    switch (letter) {
        case "w":
            var nameAudio = "tom-1.mp3";  
        break;
        case "a":
            var nameAudio = "tom-2.mp3";        
        break;
        case "s":
            var nameAudio = "tom-3.mp3";      
        break;
        case "d":
            var nameAudio = "tom-4.mp3";     
        break;
        case "j":
            var nameAudio = "snare.mp3";      
        break;
        case "k":
            var nameAudio = "crash.mp3";       
        break;
        case "l":
            var nameAudio = "kick-bass.mp3";      
        break;
    }

    if (typeof nameAudio !== 'undefined' ) {
        var audio = new Audio("sounds/"+nameAudio);  
        audio.play();
    }
    
}

function buttonAnimation(key)
{
    var buttonPress = document.querySelector("."+key);
    buttonPress.classList.toggle("pressed");
    setTimeout(function(){
        buttonPress.classList.toggle("pressed");
    }, 100)
}

// ------------------------------------------------------------------

function handleClick(value) {
    var audio = new Audio("sounds/" + value + ".mp3");
    audio.play();
}


function HouseKeeper(name, yearOfExperience, cleaningRepertoire) 
{
    this.name = name;
    this.yearOfExperience = yearOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clear = function(){
        console.log("casa limpa");
    }
}

// var houseKeeper1 = new HouseKeeper("matheus", 2, ['quartos','banheiros']);
// houseKeeper1.clear();
//console.log(houseKeeper1.cleaningRepertoire);
