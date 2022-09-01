/* ALCANCE DE TIPOS DE VARIABLES */
var variable = 0; //Alcance local, el valor puede cambiar
const constante = "Constante"; //NO puede cambiar el valor; Contraseña, APIKEY, e-mail
let let_var = 1; //Solo funciona en el bloque en el que se declara. IF, FOR, WHILE

for(let i=0; i<5; i++){
    //console.log(i);
}
//console.log(i);

for(var j=0; j<5; j++){
    //console.log(j);
}
//console.log(j);

/*
map entra a un arreglo y lo puede cambiar
filter: nos filtra para que solo aparezca elementos coincidentes con parametro
fin: mostrar primer objeto que coincida con lo que buscamos
findIndexOf: devuelve el indice de un elemento que busco
fill: rellena a partir de una posicion
some: busca si hay alguno que se parezca a lo que tengo en parámetro (true/false)
every: pregunta si todos son iguales
forEach:*/