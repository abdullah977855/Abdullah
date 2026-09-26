let textInput = document.getElementById('text-student');
let okButton = document.getElementById('enter-data');
let ol = document.getElementById('ordered-list')
okButton.addEventListener("click", function () {
    if (textInput.value == "") {
        textInput.style.borderColor = "red"
    } else if (textInput.value == "Zubair") {
        ol.style.borderColor = "black"
        ol.innerHTML += "<li class=''>" + textInput.value + "</li><br>"
        ol.style.color = "red";
    }
    else {
        ol.style.borderColor = "black"
        ol.innerHTML += "<li>" + textInput.value + "</li><br>"
        ol.style.color = "black";
    }
})