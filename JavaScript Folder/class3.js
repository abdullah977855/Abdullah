// var a = 6;
// var b = 7;
// var c = a + b++ + ++b + --b + b-- + a++ + ++a + b + a-- + --b
//      6 + 7   + 9   + 8  +   8  + 6    + 8  + 7 + 8  + 6

// var numberOne = +prompt("Enter first number");
// var numberTwo = +prompt("Enter second number");
// var power = numberOne**numberTwo;
// console.log(power);

// var age = +prompt("Enter your Age");
// if(isNaN(age) == true){
//     alert("Bhai age number mein dy.")
// }else if(age >= 18){
//     alert("You have able enrolled Web & Mobile Application Course");
// }else if(age <= 0){
//     alert("Invalid Age.")
// }else{
//     alert("You have not able to enrolled Web & Mobile Application Course");
// }

// var pin = 1234
// var balance = 60000
// var limit = 25000
// var server = true
// var UserPin = +prompt("Enter Pin Code")
// var withDrawAmount = +prompt("Enter WithDraw Amount")
// if(server==false){
//     alert("Try Again Later")
// }
// else if (isNaN(UserPin) == true || isNaN(withDrawAmount) == true) {
//     alert("Please enter Only Number")
// }
// else if (UserPin != pin) {
//     alert("Enter Correct Pin Code")

// }
// else if(withDrawAmount<=0){
//     alert("Bhai Number zero sa bara hona chia")
// }
// else if(withDrawAmount>balance){
//     alert("ap ka account ma itna balance nhi ha ")
// }
// else if(limit<withDrawAmount){
//     alert("ONE TIME CASE ONLY LIMIT"+limit)

// }
// else if (withDrawAmount<=balance && pin==UserPin) {
//     alert("You Withdraw Amount "+withDrawAmount)
//     balance=balance-withDrawAmount
//     alert("Your New Balance is : "+balance)
// }


var restaurant = true;
var burgerQuantity = 15;
var burgerPrice = 500;
var userWalletBalance = 1000;
if (restaurant === true) {
    var userBurgerQuantity = +prompt("How many burgers do you order");
    if (isNaN(userBurgerQuantity) == true) {
        alert("Number enter kro")
    } else {
        if (userBurgerQuantity <= burgerQuantity) {
            alert("Your " + userBurgerQuantity + "Burger is ready \n Please can pay payment");
            var deductionPrice = burgerPrice * userBurgerQuantity;
            if (deductionPrice >= userWalletBalance) {
                alert("Your order has cancelled because your wallet has lower amount than burger price")
            } else {
                burgerQuantity = burgerQuantity - userBurgerQuantity;
                alert("Your wallet balance is " + userWalletBalance + "\n I am deducting the " + deductionPrice + "Rupees")
                userWalletBalance = userWalletBalance - deductionPrice;
                alert("Thank you, I am successfully deduct price and now your wallet balance is " + userWalletBalance + "\n Buger stock is " + burgerQuantity)
            }
        } else {
            alert("Itna stock nhi hy");
        }
    }
} else {
    alert("Restaurant must be closed.")
}