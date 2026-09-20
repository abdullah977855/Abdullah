var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password")
var btn = document.getElementById("btn")
var showusername = document.getElementById("showusername")
var showEmail = document.getElementById("showemail")
var showPassword = document.getElementById("showpassword")

function SetItem() {
    console.log(username.value)
    console.log(email.value);
    console.log(password.value);
    localStorage.setItem("NAME", username.value);
    localStorage.setItem("Email", email.value)
    localStorage.setItem("Password", password.value)
    localStorage.setItem("login", true)
    getDATA()
}


function getDATA() {
    var getname = localStorage.getItem("NAME")
    var getPassword = localStorage.getItem("Password")
    var getEmail = localStorage.getItem("Email");
    var checkLogin = localStorage.getItem("login")
    if (checkLogin == "true") {
        showusername.innerText = "welcome: " + getname;
        showEmail.innerText = "Email: " + getEmail;
        showPassword.innerText = "Password: " + getPassword
        username.style.display = "none"
        email.style.display = "none";
        password.style.display = "none"
        btn.innerText = "log-out"
        btn.setAttribute("onclick", "logOut()")
    }
}

function logOut() {
    localStorage.clear();
    username.value = "";
    email.value = "";
    password.value = "";
    btn.innerText = "Login"
    email.style.display = "block"
    password.style.display = "block";
    username.style.display = "block"
    showEmail.innerText = "";
    showusername.innerText = "";
    showPassword.innerText = "";
    btn.setAttribute("onclick", "SetItem()")
    getDATA();
}

getDATA()