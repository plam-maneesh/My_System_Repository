





//Firt learn Variabiles

/*

 var  myVariabile = 12;
document.write(myVariabile);
console.log(myVariabile);
*/


//var myStrings = "welcome " ;

//document.write(myStrings);
//console.log(myStrings)


// say name and  say age 

/*
var yourName = prompt("What is your Name?");

document.getElementById("name").innerHTML = "hello : " + yourName;



var yourAge = prompt("What is your age?");

document.getElementById("age").innerHTML = " your age:" + yourAge;

*/

// funtions 
/*
1. Create a funtion
2. call a funtion.

*/

/*
//create 
function myfun(){


alert(" create a funtion");




}

//call 
myfun();

*/


//how to argumets workes in funtions 

//Create Funtion
/*function myName(sayName){

var name = "what is your name " + " " + sayName;

console.log(name);

    




}
*/


//call the funtion


//var name = prompt("what is your mom name?");


//myName(myName);

/*
function  number(num1,num2) {


var resalt = num1+num2;
console.log(resalt);


    }


number(10,20);

*/


//while loop

/*
var num1 = 0;

while (num1<10){

    num1 +=1;
    console.log(num1);
    
}
*/

//for loop

/*

for (let i=0; i<=10;i++) {

    
    for(let j=0; j<=i;j++){


        document.write("*");


    }
    document.write("</br>")
    
}

*/


//data types
/*
let num = 20 //number 
let string = " hllo ";//string
let object = { oject1: "manu", object2:"maya"};//object
let truth = false;// boolean
let lisOfArray = ["maneesh","unnimaya","mini"] //array
let random; //undifined
let nothing = null; //null

*/


//string common methads 

/*
let frutes = "banana";

let morFrutes = "banana\nappile";
console.log(frutes.length);
console.log(frutes.indexOf("nan"));
console.log(frutes.slice(4));
console.log(frutes.replace("ban", '123'));
console.log(frutes.toUpperCase());
console.log(frutes.toLowerCase());
console.log(frutes.charAt(2));
console.log(frutes[2]);
console.log(frutes.split(','));//split by coma 
console.log(frutes.split(""));//split by characters
*/

//array

/*
let numbers = ["nu1","nu2","num3"];

numbers = new Array("maneesh","maya","mini");
console.log(numbers[1]);

for(let i=0; i<numbers.length;i++){

     console.log(numbers[i]);



}

*/

//array comman methad

/*

console.log("newString", numbers.toString());

console.log(numbers.join(" * "));
console.log(numbers.pop(), numbers);
console.log(numbers.push("mukundhan"));
console.log(numbers[2]);
numbers[numbers.length] = " new Numbers";//same as push
console.log(numbers);
numbers.shift(); // remove first element for array
console.log(numbers);

numbers.unshift("morNumbers");//add first element to an array
console.log(numbers);


*/


//Ojects in Javascrip 

let students = {
    name: "myName:maneesh",
    age: "myAge:23", place: "myPlace:Thrissur",
    studentsInto: function () {


        return this.name + '\n' + this.age + '\n' + this.place;

    }


};


console.log(students.place);


console.log(students.studentsInto());

// Conditional, Control flow (if else)



let Name = prompt("what is yor Name ?");
let Age = prompt("what is your age?");

if (Name == "Maneesh" && Age== "22"){
    document.getElementById("Names").innerHTML = Name;
    document.getElementById("Ages").innerHTML = Age;
}
else if (Name == "prema" && Age== " 60"){

document.getElementById("Names").innerHTML = "Your Name is :" + Name;
document.getElementById("Ages").innerHTML = "Your Age is :" + Age;   
}  
    
else
{
    alert("Null");




}


























































/*______________________________________*/

