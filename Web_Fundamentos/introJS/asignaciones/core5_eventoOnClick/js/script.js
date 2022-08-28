function cambiar_status(elemento_login){
    if (elemento_login.innerText === "Login"){
        elemento_login.innerText = "Logout";
    } else{
        elemento_login.innerText = "Login";
    }
}

function darLike(){
    alert("Ninja was liked");
}

function eliminar(elemento_btn){
    elemento_btn.remove();
}