console.log("Página Cargada");

function clic_editar(){
    alert("Editando Perfil");
};


var doble_clic = 0;
function dobleclic_avatar(){
    doble_clic++;
    console.log("Ha hecho doble clic: "+doble_clic+" veces");  
}


function over(){
    console.log("El mouse está sobre Jane");
};

function out(){
    console.log("El mouse está fuera de Jane");
};