// var todo = document.getElementById("todo")
var input = document.getElementById("input")
var display = document.getElementById('display')

var add = document.getElementById("add")
var edit = document.getElementById("edit")

var editTodo = null; //ref 



input.addEventListener("keypress", function (e) {
    console.log(e.key)
    if (e.key == "Enter" && editTodo==null) {
        todo()
    }
    else{
        updateTodo()
    }
})

input.addEventListener("input", function () {

    if (input.value != "") {
        input.style.border = "2px solid black"
    }
    else {
        input.style.border = "2px solid red"
    }
})

function todo() {
    if (input.value == "") {
        input.style.border = "2px solid red"
    }
    else {
        display.innerHTML += `
        <li><b>  ${input.value}</b>
        <button onclick=editBtn(this)>Edit</button>
        <button onclick=DeleteBtn(this) >Delete</button>
        
        </li>
        `
        input.value = ""
    }
}

function DeleteBtn(event) {
    event.parentNode.remove()

}

function editBtn(event) {
    edit.style.display = "inline"
    add.style.display = "none"
    input.value = event.parentNode.childNodes[0].innerText
    editTodo = event.parentNode //current parent
    console.log(editTodo)
    //  var data =  prompt("enter todo",event.parentNode.childNodes[0].innerText)

}

function updateTodo() {

    if (input.value == "") {
        input.style.border = "2px solid red"
    }
    else {
        editTodo.childNodes[0].innerText=input.value
        add.style.display="inline"
        edit.style.display="none"
        input.value=""
        editTodo=null

    }
}   

search.addEventListener("input",function(){
    var parentEl=  display.parentElement //body
    const listItems = parentEl.querySelectorAll("li"); //li
    console.log(listItems) //total 5
    for(var i=0;i<listItems.length;i++){
        console.log(listItems[i].childNodes[0].innerText)
        if(listItems[i].childNodes[0].innerText==search.value){
            listItems[i].style.display="list-item"
        }
        else{
            listItems[i].style.display="none"
        }
       

    }
   
})