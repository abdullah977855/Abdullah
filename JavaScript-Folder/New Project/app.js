const startButton = document.getElementById("start");
const storeButton = document.getElementById("store");
const stopButton = document.getElementById("stop");
const clearButton = document.getElementById("clear");
const display = document.getElementById("display");
const unorderList = document.getElementById("unorderlist");
let second = 0;
let timer = null;
let storeItemArray = [];

startButton.addEventListener("click", () => {
    timer = setInterval(() => {
        updateTime();
        startButton.disabled = true
    }, 1000)
    clearButton.disabled = true;
    
})

function updateTime(){
    second++
    let hours = Math.floor(second/3600);
    let minutes = Math.floor((second%3600)/60);
    let sec = second%60;
    display.innerText = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

stopButton.addEventListener("click", () => {
    clearInterval(timer)
    startButton.disabled = false;
    clearButton.disabled = false;
})


clearButton.addEventListener("click", () => {
    second = 0;
    display.innerText = "00:00:00";
    // clearInterval(timer)
})

storeButton.addEventListener("click", () => {
    unorderList.style.display = "block";
    let listItem = document.createElement("li");
    listItem.innerText = display.innerText;
    unorderList.appendChild(listItem)
    storeItemArray.push(display.innerText);
    console.log(storeItemArray)
    if(storeItemArray.length == 5){
        let warning = document.createElement("h3");
        warning.innerText = "Maximum Store 5 Item";
        unorderList.appendChild(warning);
        display.innerText = "00:00:00"
        second = 0;
        clearInterval(timer)
        storeButton.disabled = true;
        startButton.disabled = false;
        }
})