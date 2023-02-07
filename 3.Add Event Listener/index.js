for (var i = 0; i<document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        handleClick(this.value);
    })
}


function handleClick(value) {
    alert("I got clickes! " + value);
}