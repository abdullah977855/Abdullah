// function message(title){
//     alert("=> " + title)
// }

// function setRed(event){
// console.log(event);
//     event.style.backgroundColor='red';
// }

// function setYellow(event){
// console.log(event);
//     event.style.backgroundColor='yellow';
// }

// let userName = document.getElementById("username");
// let email = document.getElementById("email");
// function submit(){
//     if(userName.value == ""){
//         userName.style.border = '2px solid red';
//         alert("Fill out username")
//     }else{
//         userName.style.border = '2px solid black';
//     }
//     if(email.value == ""){
//         email.style.border = '2px solid red';
//         alert("Fill out email")
//     }else{
//         email.style.border = '2px solid black';
//     }
// }
let textArea = document.getElementById("textarea");
function setDesign(event){
    if(event === "bold"){
        textArea.style.fontWeight = 'bold';
    }else if(event === "italic"){
        textArea.style.fontStyle = 'italic';
    }else if(event == "increase"){
        
    }
}