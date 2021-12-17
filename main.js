const btn = document.getElementById("btn");

function login(element) {
    if(element.innerText == "Login") {
        element.innerText = "Logout" ;
    } else {
        element.innerText = "Login" ;
    }
}

function showAlert() {
    var myText = "Ninja was liked!";
    alert (myText);
}

function message() {
    alert("Ninja was liked!");
}