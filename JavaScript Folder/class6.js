// let age = 5;
// let schoolOpen = true;
// if(schoolOpen === true){
//     console.log("Student will going to school");
// }
// if(age >= 18){
//     console.log("You are eligible to make NIC");
// }else{
//     console.log("You are not eligible to make NIC");
// }

//Loop

//For Loop

for(let i = 0; i < 10; i++){
    console.log(i)
}

let op = '+';

let num1 = 32;
let num2 = 21;
let result;
switch (op){
    case '+':
    result = num1 + num2;
    console.log(result)
    break;
    case '-':
    result = num1 - num2;
    console.log(result)
    break;
    default:
        console.log("Other Statement");
}