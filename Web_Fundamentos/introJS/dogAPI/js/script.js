/*
status: 200 (eso es que está 👍)
*/

function muestraPerrito(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json()) //Prometo que en algún momento voy a recibir una repuesta
    // hasta que termine de filtrar ese json, y lo transformamos en data (otra var donde guardaremos el json)
    .then(data => {
        console.log(data);
        // manda el message y el status
        // message tiene el url con una imagen del perrito
        // data = {"message": "imagen.ext", "status": "success"} Recibimos el JSON
        // data["message"] => Regresar el valor con la URL de la imagen
        console.log(data["message"]);

        // var image_perrito = '<img src="URL DE LA IMAGEN" alt="dog">';
        var imagen_perrito = '<img src="'+data["message"]+'"" alt="dog">';

        var contenedor_img = document.querySelector(".contenedor-img");
        contenedor_img.innerHTML = imagen_perrito;
    })
}


/*
Asincrónica, manejamos el tiempo
*/

async function muestraPerritoAsync(){
    var response = await fetch('https://dog.ceo/api/breeds/image/random');  
    // await va a esperar hasta que el fetch se ejecute y me regrese algo
    // en una var llamada response vamos a esperar que vaya a hacer una solicitud y regrese
    // estamos guardando la respuesta en una variable response

    var data = await response.json();
    // también esperamos a que llegue con el JSON, porque savemos que también puede tardar

    var imagen_perrito = '<img src="'+data["message"]+'"" alt="dog">';
    var contenedor_img = document.querySelector(".contenedor-img");
    contenedor_img.innerHTML = imagen_perrito;
}

// ninguna es mas lenta que otra
// las cosas que tenga dentro de mi fetch se 

/*
mientras busque haga otras acciones, usar fetch y sincronica
si no nos importa, usar asincronica
*/