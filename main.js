const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText= "Logout";
    }
});

function showAlert() {
    var myText = "Ninja was liked!";
    alert (myText);
  }