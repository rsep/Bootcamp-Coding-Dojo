console.log("Página Cargada");

function clic_editar(){
    alert("Editando Perfil");

    // seleccionar un elemento en especifico para cambiarlo
    var elemento_p = document.querySelector('#descripcion'); // seleccionando elemento con id descripcion
    console.log(elemento_p);
    elemento_p.innerText = "Desarrolladora, empoderada, creativa y muy divertida";

    // modificar imagend de perfil
    var imagen_perfil = document.querySelector('.card-header img');
    imagen_perfil.src = 'images/foto4.jpg';

    // Agregar clase  a h1 (en mi caso es h2)
    var nombre = document.querySelector('h2');
    nombre.classList.add('purple');
};


var doble_clic = 0;
function dobleclic_avatar(){
    doble_clic++;
    console.log("Ha hecho doble clic: "+doble_clic+" veces");  
}


function over(){
    console.log("El mouse está sobre Jane");
    var nombre = document.querySelector("h2");
    nombre.style.backgroundColor = "red";
};

function out(){
    console.log("El mouse está fuera de Jane");
    var nombre = document.querySelector("h2");
    nombre.style.backgroundColor = "white";
};

function cambieNombre(elemento_h2){
    // recibimos el elemento h2
    console.log(elemento_h2);

    // hacer un sitch de nombres
    if (elemento_h2.innerText === "Jane Doe"){
        elemento_h2.innerText = "Juana De Arco";
    } else{
        elemento_h2.innerText = "Jane Doe";
    }
}

function cambiaImagen(elemento_img){
    console.log(elemento_img.src); //nos da la ruta completa
    if (elemento_img.src.includes("images/map-marker.png")){ //para preguntar si la ruta incluye el nombre del argumento
        elemento_img.src = "images/gear.png";
    } else {
        elemento_img.src = "images/map-marker.png";
    }

    var location = document.querySelector("h4");
    if (location.style.textDecoration !== "underline"){
        location.style.textDecoration = "underline";
    } else{
        location.style.textDecoration = "none";
    }
    
}

function elimine(elemento_p){
    elemento_p.remove(); //elimina el elemento al que hacemos doble clic
}

function cambioInput(){
    console.log("Hubo un cambio");
    var input = document.querySelector("#nombre");
    console.log(input.value);

    var elemento_h2 = document.querySelector("h2");
    elemento_h2.innerText = input.value;
}