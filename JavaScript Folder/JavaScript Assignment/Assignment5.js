// 1
var numOne = 5;
var numTwo = 3;
var sum = numOne + numTwo;
var subtract = numOne - numTwo;
var multiply = numOne * numTwo;
var divide = numOne / numTwo;
var remainder = numOne % numTwo;
console.log("Sum of " + numOne + " and" + numTwo + " is " + sum);
console.log("Subtract of " + numOne + " and" + numTwo + " is " + subtract);
console.log("Multiply of " + numOne + " and" + numTwo + " is " + multiply);
console.log("Divide of " + numOne + " and" + numTwo + " is " + divide);
console.log("Modulus of " + numOne + " and" + numTwo + " is " + remainder);

//2
var message = "Hello";
console.log("Value after variable declaration is " + message);
message = "Hello World!"
console.log("Initial value is " + message);

//3
var numberThree = 5;
numberThree++;
console.log("Value after increment is " + numberThree);
numberThree = numberThree + 7;
console.log("Value after addition is " + numberThree);
var numberFour = 13;
numberFour--;
console.log("Value after decrement is " + numberFour);
numberFour = numberFour % 3;
console.log("The remainder is " + numberFour);

//4
var priceOfMovieTicket = 600;
console.log("Total cost to buy 5 tickets to a movie is " + priceOfMovieTicket * 5 + "PKR");

//5
var tableOf = 4;
var tableSyntax = tableOf + " * ";
console.log("Table of " + tableOf);
console.log(tableSyntax + "1 = " + 4 * 1);
console.log(tableSyntax + "2 = " + 4 * 2);
console.log(tableSyntax + "3 = " + 4 * 3);
console.log(tableSyntax + "4 = " + 4 * 4);
console.log(tableSyntax + "5 = " + 4 * 5);
console.log(tableSyntax + "6 = " + 4 * 6);
console.log(tableSyntax + "7 = " + 4 * 7);
console.log(tableSyntax + "8 = " + 4 * 8);
console.log(tableSyntax + "9 = " + 4 * 9);
console.log(tableSyntax + "10 = " + 4 * 10);

//6
var fahrenheitValue = 70;
var celsiusValue = 25;
var celsiusCalculator = (fahrenheitValue - 32) * 5 / 9;
var fahrenheiCalculator = celsiusValue * 9 / 5 + 32;
console.log(celsiusValue + " C is" + fahrenheiCalculator + " F");
console.log(fahrenheitValue + " F is" + celsiusCalculator + " C");

// 7
var priceOfFirstItem = 120;
var priceOfSecondItem = 250;
var orderQuantityOfFirstItem = 3;
var orderQuantityOfSecondItem = 8;
var shippingCharges = 400;
var totalCharges = priceOfFirstItem * orderQuantityOfFirstItem + priceOfSecondItem * orderQuantityOfSecondItem + shippingCharges;
console.log("Shopping Cart \n Price Of First Item is " + priceOfFirstItem + "\n Quantity of first item is " + orderQuantityOfFirstItem + "\n Price of second item is " + priceOfSecondItem + "\n Quantity of second item is " + orderQuantityOfSecondItem + " \n Shipping Charges " + shippingCharges + "\n Total cost of your order is " + totalCharges);


// 8
var totalMarks = 500;
var marksObtained = 374;
var calculatePercentage = marksObtained / totalMarks * 100;
console.log("Marks Sheet \n Total Marks: " + totalMarks + "\n Marks Obtained: " + marksObtained + "\n Percentage: " + calculatePercentage + "%");

// 9
var usDollars = 10;
var saudiRiyal = 25;
var exchangingTheRates = usDollars * 104.80 + saudiRiyal * 28;
console.log("Currency in PKR \n Total Currency in PKR: " + exchangingTheRates);

// 10
var num = 4;
var calculation = ((4 + 5) * 10) / 2;
console.log("Result is: " + calculation)

// 11
var currentYear = 2026;
var bithYear = 2000;
var ageCalculation = currentYear - bithYear;
console.log("Age Calculation \n Current Year " + currentYear + "\n Birth Year " + bithYear + "\n Your age is " + ageCalculation);

// 13\
var snackName = "Lays";
var currentAge = 15;
var maximumAge = 35;
var amountOfSnacksPerDay = 2;
console.log("The Lifetime Supply Calculator \n Favourite Snack: " + snackName + "\n Current Age: " + currentAge + "\n Estimated Maximum Age: " + maximumAge + "\n Amount of Snack per day: " + amountOfSnacksPerDay + "\n ")