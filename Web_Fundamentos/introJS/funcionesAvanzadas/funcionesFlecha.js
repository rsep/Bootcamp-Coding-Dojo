/* FUNCIONES FLECHA */
// Función normal
function sumatoria(parametro1, parametro2){
    return parametro1+parametro2;
}
var sum = sumatoria(1,2);
console.log(sum);

// Función flecha
var sumatoriaFlecha = (parametro1, parametro2) => parametro1+parametro2;
console.log(sumatoriaFlecha(5,6));


/*
response => response.json()
// es lo mismo que 👇
function x(response){
    return response.json();
}
*/

var helloWorld = nombre => console.log("Hello World "+nombre);
helloWorld("Ana");

// desarrollo MERN (orientado a crear apis)
// python java mern (orientado a web)