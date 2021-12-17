const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText= "Login";
    }
});

function showAlert() {
    var myText = "Ninja was liked!";
    alert (myText);
  }