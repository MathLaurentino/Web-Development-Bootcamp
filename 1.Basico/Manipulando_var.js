
var nome = prompt("Right a Text but with only 140 letters");

diferenca = nome.slice(0,140).length;

document.getElementById("texto").innerHTML="numero de letras: " +  nome.length + "<br>" +
"numero ultrapassado: " + diferenca; 

//---------------------------------------

// Concatenação com functions

alert(prompt("Composer your tweet:").slice(0,5)); // retorna o nome da primeira a quinta letra
alert((prompt("Composer your tweet:").slice(0,5)).length); // retorna 5
alert((prompt("Composer your tweet:")).length); // retorna o numero de letras 

//---------------------------------------
//Nome com primeira letra maiuscula e o restante minuscula


var nome = prompt("What is your name?");
nome = (nome.slice(0,1)).toUpperCase() + (nome.slice(1,nome.length).toLowerCase());
alert(nome);


//---------------------------------------
// Idade de cachorro - matemática basica


var dogAge = prompt("Age of your dog");
var humanAge = ((dogAge - 2) * 4) + 21;
alert(humanAge);


//---------------------------------------
// operações


var x = 6;
var y = 3;
x++;
x--;
x += 1;
x -= 1;
x /= 2;
x += y;
x -= y;
alert(x);

var x = 3;
var y = x++;
y += 1;
alert (y) // 4
alert (x) // 4



//---------------------------------------

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.


console.log(bmiCalculator(65, 1.8));

function bmiCalculator(weight, height){
    var bmi = Math.round((weight / (height*height)));
    return bmi;
}



/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.
*/

//------------------------------------------------------------------------------


document.getElementById("texto").innerHTML="Wellcome to my new Website";

var num = Math.random();
num = num * 6;
num = Math.floor(num) + 1;
console.log(num);


prompt("What is your age?");
prompt("What is your crush's name?");

    function randomico()
    {
        x = 0;
        do{
            num = Math.random();
            num = Math.floor((num * 10000) + 1);
            console.log(num + "%");
            x++;
        } while (num !== 100)

        num = Math.random();
        num = Math.floor((num * 10000) + 1);
        return num;
        // console.log(num + "%");
        // console.log(x);
    }

//---------------------------------------

//console.log(bmiCalculator(60, 2));

    function bmiCalculator(weight, height){
        var bmi = Math.round((weight / (height*height)));
        if (bmi < 18.5) {
            return "Your BMI is " + bmi + ", so you are underweight."
        }else if(bmi > 18.5 && bmi < 24.9){
            return "Your BMI is " + bmi + ", so you have a normal weight."
        } else {
            return "Your BMI is " + bmi + ", so you are overweight."            
        }
    }

//---------------------------------------

    function isLeap(year) {
        console.log(year);
        if (year % 4 == 0 && year % 100 != 0){
            return "Leap year.";
        } else {
            if (year % 4 == 0 && year % 400 == 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        }
    }

//---------------------------------------

    var guestList = ["Angela", "Jack", "Pam", "James"];

    var nome = prompt("Nome");

    console.log(guest(nome))

    function guest(nome) {
        return guestList.includes(nome);
    }


//---------------------------------------

    var outPut = [1];
    outPut.push(2,3,4); // adiciona no final do array
    console.log(outPut);
    var x = outPut.pop(); //apaga o ultimo elemento do final do array
    console.log(outPut);
    console.log(x);


//---------------------------------------

    var outPut = [];
    var num = 1;
    
    function fizzBuzz()
    {
        if (num % 3 == 0 && num % 5 == 0) {
            
            outPut.push("FizzBuzz");
            
            
        } else if (num % 3 == 0) {
            
            outPut.push("Fizz");
            
            
        } else if (num % 5 == 0 ) {
    
            outPut.push("Buzz");
            
            
        } else {
            
            outPut.push(num);
            
        }
        num++;
        console.log(outPut);
    }

//---------------------------------------

    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

    whosPaying(names);

    function whosPaying(names) {
        
        var num = names.length;
        var random = Math.random();
        var person = Math.floor((random * num));

        //console.log(names[person] + " is going to buy lunch today!");
        return names[person] + " is going to buy lunch today!"
        
    }


//---------------------------------------

    var numberOfBottles = 99
    while (numberOfBottles >= 0) {
        var bottleWord = "bottle";
        if (numberOfBottles === 1) {
            bottleWord = "bottles";
        } 
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
        console.log(numberOfBottles + " " + bottleWord + " of beer,");
        console.log("Take one down, pass it around,");
        numberOfBottles--;
        console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    }


//---------------------------------------

var n = prompt("numero");
fibonacciGenerator(n);

function fibonacciGenerator (n) {

    if (n == 1) {
        var outPut = [0];
    } else {
        var outPut = [0,1];

        var i = 0;
        while (i < (n - 2)) {
            var last = outPut.pop();
            var antiLast = outPut.pop();

            var add = last + antiLast;
            outPut.push(antiLast, last, add);
            i++;
        }
    }
    console.log(outPut);
    return outPut;
    

}


var str = "30/12/2022 15:00:00";
var palavra = split(str);
console.log(palavra[1]);

//---------------------------------------


//146

 document.getElementsByClassName("btn");

 document.getElementsByTagName("li")[1].style.color="red";

 document.getElementsByTagName("li").length;

 document.getElementById("title").innerHTML= "Good by";

 document.querySelector("li a")

 document.querySelector("li.item");​

 document.querySelector("#list .item");

 document.querySelectorAll("#list .item");

 document.querySelectorAll("#list .item")[2].style.color="blue";




 //145

    document.querySelector("button.btn").classList;

    document.querySelector("button.btn").classList.toggle("huge");



 //147

    document.querySelector("a").attributes
    document.querySelector("a").getAttribute("href")
    document.querySelector("a").setAttribute("href","https://www.youtube.com")

