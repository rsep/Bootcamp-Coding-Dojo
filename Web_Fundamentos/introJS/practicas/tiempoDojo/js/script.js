function show_alert(elemento_a){
    var city = elemento_a.innerText;
    alert("Loading weather report de " + city);
}

function eliminar(cookie){
    cookie = document.querySelector(".cookie");
    cookie.remove();
}

function cambiarTemp(elemento_select){
    var fOc = elemento_select.value;
    console.log(fOc);

    // empezamos en temperatura 1
    for (var i=1; i<=8; i++){
        // seleccionar elemento que tenga como número
        var elemento_temp = document.querySelector("#temp"+i);
        var temperatura = elemento_temp.innerText;
        temperatura = parseInt(temperatura);

        var new_temp = 0;

        if(fOc === "C"){
            // F a C
            new_temp = Math.round((temperatura-32) * 5 / 9);
        } else{
            // C a F
            new_temp = Math.round((temperatura * 9 / 5) + 32);
        }

        elemento_temp.innerText = new_temp+"°";
    }
}