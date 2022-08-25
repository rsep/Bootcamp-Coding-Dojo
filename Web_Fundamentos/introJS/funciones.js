function hello_world(){
    console.log("Hello World!");
    console.log("cómo estás?");
};
hello_world();

// Función que agrega elementos a una lista
function agrega_lista(){
    lista.push("a");
}
var lista = ["a"];
agrega_lista();
console.log(lista);

// Funciones que reciban datos
function hola_mundo(nombre){
    console.log("Hola "+nombre+"!");
};
hola_mundo("Juana");

// Recibir 2 parámetros 
function hola(nombre,apellido){
    console.log("Hola "+nombre+" "+apellido+"!");
};
hola("Juana","De Arco");

// Return en Funciones
function multiplicar(num1,num2){
    var total = num1 * num2;
    return total;
};
var total_multiplicacion = multiplicar(4,5);
console.log("4 x 5 = "+total_multiplicacion);