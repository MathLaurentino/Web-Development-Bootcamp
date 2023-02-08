//$("h1").css("color", "red");

// $("h1").removeClass("big-title margin-50");
// $("h1").addClass("big-title margin-50");
// $("h1").hasClass("margin-50"); // true ou false

// $("button").text("oi");
// $("button").html("<em> aqui </em>");

// $("img").attr("src"); // retorna o valor de src
// $("a").attr("href", "https://www.youtube.com"); // substitui o valor de href

// $("h1").before("<button>before</button>");
// $("h1").after("<button>after</button><br><br>");
// $("h1").prepend("<button>prepend</button>");
// $("h1").append("<button>append</button>");


// $("button").click(function(){
//     alert(this.value)
// });

// $(document).keypress(function(event){
//     //texto = $("h1").text();
//     $("h1").text(event.key)
// });

// $("h1").on("click", function() {
//     $("h1").css("color", "purple");
// });



// ----------------- ANIMATION -----------------



$("button").on("click", function(){
    //$("h1").toggle();

    //$("h1").fadeOut();
    //$("h1").fadeIn();
    // $("h1").fadeToggle();

    // $("h1").slideUp();
    // $("h1").slideDown();
    //$("h1").slideToggle();

    // $("h1").animate({
    //     opacity: 0.5,
    //     margin: "20%"
    // });

    $("h1").slideUp().slideDown().animate({opacity: 0.3})
});