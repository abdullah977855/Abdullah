// // Array Methods


// // remove data from last => pop()
// let num = [2, 4, 6, 8, 10];
// console.log(num)
// num.pop();
// console.log(num)

// // remove data from Start => shift()
// let nameFriends = ["Ali", "Zain", "Usama"]
// console.log(nameFriends);
// nameFriends.shift();
// console.log(nameFriends)

// // add data from first => unshift()
// let nameOfCzn = ["abdullah", "Abubakar", "basit", "Haris"]
// nameOfCzn.unshift("Zahid") 
// console.log(nameOfCzn);

// // add data from last => push()
// let anOtherName = ["Zuhaib", "Zayan", "Rizwan"]
// anOtherName.push("Rayan");
// console.log(anOtherName);

// splice method => splice()

// first use case

// let myArray = [1, 2, 3, 4, 5, ,6]
// myArray.splice(3,2)
// console.log(myArray);


// second use case

// let evenNum = [2, 4, 6, 10, 12, 14, 16, 18, 20];
// evenNum.splice(3, 0, 8)
// console.log(evenNum);


// splice task

// let nameOfMyFriends = ["Ahad", "Samad", "Rehan", "Shahid", "Amir", "Saqib"]
// let inputOFStartIndex = +prompt("Enter Starting Index");
// let inputOfDeleteIndex = +prompt("Enter the deleting number")
// let inputofAddNewData = prompt("Enter the new data you want to add");

// nameOfMyFriends.splice(inputOFStartIndex, inputOfDeleteIndex, inputofAddNewData);
// document.write(nameOfMyFriends)


// Check Element present in array: return the true or false => include()
// let cityName = ["Karachi", "Hyderabad", "Islamabad", "Faisalabad"]
// let inputOfCityName = prompt("Enter City Name");
// let condition = cityName.includes(inputOfCityName);
// console.log(condition);

// Check element present in array : return index number => indexOf()
// let cityName = ["Karachi", "Hyderabad", "Islamabad", "Faisalabad"]
// let inputOfCityName = prompt("Enter City Name");
// let indexNumber = cityName.indexOf(inputOfCityName);
// console.log(indexNumber);


let anyNum = [1, 2, 3, 4, 5, 6, 7, 8, 8, 5, 5, 4, 5]
let inputOfCheckArray = +prompt("Enter the number you want to check present in array.")
let checkTheArray = anyNum.includes(inputOfCheckArray);
if (checkTheArray === true) {
    document.write(anyNum + "<br><br>")
    document.write(inputOfCheckArray + " is present in Array")
} else if (checkTheArray === false) {
    document.write(anyNum + "<br><br>")
    document.write("Does not present in array")
}