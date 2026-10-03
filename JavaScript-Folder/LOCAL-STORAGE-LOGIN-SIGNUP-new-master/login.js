
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginBtn = document.getElementById("loginBtn")

let userList = []

let erroremail = document.getElementById("erroremail")
let errorpassword = document.getElementById("errorpassword")

loginBtn.addEventListener("click", LoginInFunc)

function getAllPreviousUser(){
   var userObject = JSON.parse(localStorage.getItem("UserList"))
   userList= userObject
}

getAllPreviousUser()

function LoginInFunc() {
    let userCheck = false
    let selectedIndex;
    if (email.value != "" && password.value != "") {
        for(var i=0;i<userList.length;i++){
            console.log(userList[i].email)
            if(email.value == userList[i].email){
                selectedIndex = i
                userCheck=true
            }

        }

        if(userCheck==true){
            if(password.value==userList[selectedIndex].password){
                //  alert("user login")
                 window.location.replace("dashboard.html")
            }
            else{
                 alert("invalid data")
            }
           
        }
        else{
            alert("user not found")
        }
    
    }
    else {
        
        if (email.value == "") {
            erroremail.innerText = "Please fill email"

            erroremail.setAttribute("class", "error")

        }

        if (password.value == "") {
            errorpassword.innerText = "Please fill password"

            errorpassword.setAttribute("class", "error")
        }

    }


}



email.addEventListener("input", function (e) {
    if (email.value != "") {
        erroremail.innerText = ""

    }
    else if (email.value == "") {
        erroremail.innerText = "Please fill username"

        erroremail.setAttribute("class", "error")

    }

})

password.addEventListener("input", function (e) {
    if (password.value != "") {
        if (password.value.length < 8) {
            errorpassword.innerText = "Password must be 8 letter long"

            errorpassword.setAttribute("class", "error")

        }
        else {
            errorpassword.innerText = ""
        }


    }

    else if (password.value == "") {
        errorpassword.innerText = "Please fill username"

        errorpassword.setAttribute("class", "error")

    }

})

