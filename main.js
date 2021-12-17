const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{

    if(btn.innerText === "Login"){
        btn.innerText = "Logout";
    }else{
        btn.innerText= "Logout";
    }
});