var lunComida = 100;
var lunTransporte = 5;
var marComida = 45;
var marTransporte = 10;

var gastos = [100, 5, 45, 10];
// una lista en la cual guardamos más de un valor

var hobbies = [
    "Hacer ejercicio",
    "Leer",
    "Ver series",
    "Comer"
];

var animales = [
    "Perro",
    "Gato",
    "Pájaro"
];

var lista2 = [
    [1, 2, 3],
    [1, 2, 3]
];

console.log("El primer hobbie de la lista es: "+hobbies[0]);
console.log("El segundo hobbie de la lista es: "+hobbies[1]);
console.log("Tengo "+animales.length+" animalitos");


// Para saber la cantidad de gastos
// var total_gastos = gastos[0] + gastos[1] + gastos[2]

var total_gastos = 0;
for (var i=0; i<gastos.length; i++){
    total_gastos += gastos[i];
}
console.log("Total de Gastos: "+total_gastos);

/*
gastos = [100,5,45,10]
i = 0
0 < 4
total_gastos = 100

i = 1
1 < 4
total_gastos = 105

i = 2
2 < 4
total_gastos = 150

i = 3
3 < 4
total_gastos = 160

i = 4
4 < 4
*/


// imprimir todos los elementos de la lista hobbies
console.log("\nHobbies:")
for (var i=0; i<hobbies.length; i++){
    console.log("- "+hobbies[i]);
}
console.log("\nEl último hobbie de la lista es: "+hobbies[hobbies.length-1])

// imprimir animales al revés
console.log("\nAnimales al revés:");
for (var i=animales.length-1; i>-1; i--){
    console.log("- "+animales[i]);
}