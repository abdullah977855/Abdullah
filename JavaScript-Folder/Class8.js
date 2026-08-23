// String Methods:

// toUpperCase() method:
// let userInput = prompt("Enter discription");
// userInput = userInput.toUpperCase();
// console.log(userInput)

// toLowerCase() method:
// let userInput = prompt("Enter discription");
// userInput = userInput.toLowerCase();
// console.log(userInput)

// slice() method
// let a = "Saylani";
// let b = a.slice(3, 7);
// console.log(a);
// console.log(b);

// indexOF() method:
// let a = "saylani mass it training program";
// let b = a.indexOf("a")
// console.log(b);

// lastIndexOF() method
// let a = "saylani mass it training program";
// let b = a.lastIndexOf("a")
// console.log(b);

// charAt() method
// let a = "saylani";
// console.log(a.charAt(2));

// Task
// let userInput = prompt("Enter your text");
// let userInputIndex = +prompt("Enter your index number to check your data");
// let process = userInput.charAt(userInputIndex);
// document.write("User Input is " + userInput + "<br>")
// document.write("Index of " + userInputIndex + " is " + process);

// charCodeAt() method
// let a = "abdul";
// console.log(a.charCodeAt(a));

// Task
// let input = prompt("Enter your text")
// let findAsciCode = input.charCodeAt(0);
// document.write("Your Text is " + input + "<br>");
// document.write("Your 0 index ASCI Code is " + findAsciCode) 97 122

let systemNumber = (Math.random()*11).toFixed();
let a = +prompt("Enter your number");
for(let i = 0; i <= 3; i++){
    if(systemNumber === a){
        document.write("You Win")
    }
    else{
        document.write("You Lose")
    }
}