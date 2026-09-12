let input = document.getElementById('input');
let todo = document.getElementById('todo');
let displayText = document.getElementById('text')
todo.addEventListener("click", function(){
    alert(input.value);
    displayText.innerHTML += "<h2>" + input.value + "</h2>"
})