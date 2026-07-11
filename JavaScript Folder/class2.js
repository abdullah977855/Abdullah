// var input = prompt("Enter your name");
// var age = +prompt("Enter your age");
// var cnic = +prompt("Enter your CNIC");
// alert("Your name is: " + input + "\n Yor age is: " + age + "\n Your CNIC is: " + cnic);


// var username = prompt("Enter Your Name");
// var rollno = +prompt("Enter Your Roll no");
// var course = prompt("Enter Your Course");
// var city = prompt("Enter Your City");
// alert("Your name is " + username + "\n Your Roll no is " + rollno + "\n Your course is " + course + "\n Your city is " + city);


// var input1 = +prompt("Enter first number");
// var input2 = +prompt("Enter last number");
// var sumNumber = input1 + input2;
// var minusNumber = input1 - input2;
// var multiplyNumber = input1 * input2;
// var divideNumber = input1 / input2;
// alert("Sum of two number is " + sumNumber + "\n Subtract of two number is " + minusNumber + "\n Multiply of two number is " + multiplyNumber + "\n Division of two number is " + divideNumber);

// var input1 = prompt("enter number : ");
// var input2 = prompt("Divided by : ");
// var modulusAns = input1 % input2;
// console.log(modulusAns);

var amount = prompt("Enter Amount");
var fiveThousandsNotes = Math.floor(amount / 5000).toFixed(0);
var leftFiveThousands = amount % 5000;
var thousandsNotes = Math.floor(leftFiveThousands / 1000).toFixed(0);
var leftThousandsNotes = leftFiveThousands % 1000;
var fiveHundredsNotes = Math.floor(leftThousandsNotes / 500).toFixed(0);
var leftFiveHundredsNotes = leftThousandsNotes % 500;
var hundredsNotes = Math.floor(leftFiveHundredsNotes / 100).toFixed(0);
var lefthundredsNotes = leftFiveHundredsNotes % 100;
var fiftyNotes = Math.floor(lefthundredsNotes / 50).toFixed(0);
var leftFiftyNotes = lefthundredsNotes % 50;
var twentyNotes = Math.floor(leftFiftyNotes / 20).toFixed(0);
var leftTwentyNotes = leftFiftyNotes % 20;
var tenNotes = Math.floor(leftTwentyNotes / 10).toFixed(0);
var leftTenNotes = leftTwentyNotes % 10;
console.log("\n Five Thousands Rupees : " + fiveThousandsNotes + "\n Thousands Rupees : " + thousandsNotes + "\n Five Hundred Rupees : " + fiveHundredsNotes + "\n Hundred Rupees : " + hundredsNotes + "\n Fifty Rupees : " + fiftyNotes + "\n Twenty Rupees : " + twentyNotes + "\n Ten Rupees : " + tenNotes + "\n Remaining rupees : " + leftTenNotes);