let userName = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signBtn = document.getElementById("signBtn")

let userList =[]

let errorname = document.getElementById("errorname")
let erroremail = document.getElementById("erroremail")
let errorpassword = document.getElementById("errorpassword")

function getAllPreviousUser(){
   var userObject = JSON.parse(localStorage.getItem("UserList")) || [];
   userList= userObject
}

getAllPreviousUser()

signBtn.addEventListener("click", SignUpFunc)

function SignUpFunc() {
    console.log(userList)
    if(email.value!="" && password.value!="" && userName.value!=""){
        var userObj = {
            email :email.value,
            password:password.value,
            userName:userName.value
        }
        console.log(userObj)
        userList.push(userObj)

        localStorage.setItem("UserList",JSON.stringify(userList))
        window.location.href="login.html"

        


    }
    else{
        if (userName.value == "") {
        errorname.innerText = "Please fill username"

        errorname.setAttribute("class", "error")
    }
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


userName.addEventListener("input", function (e) {
    if (userName.value != "") {
        errorname.innerText = ""

    }
    else if (userName.value == "") {
        errorname.innerText = "Please fill username"

        errorname.setAttribute("class", "error")

    }

})

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

