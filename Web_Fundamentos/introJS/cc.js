// Condicionales

var bool = false;
if (bool){
    console.log("Variable verdadera");
} else{
    console.log("Variable Falsa");
}

var n = 10;
if (n>15){
    console.log("Número mayor a 15");
} else{
    console.log("Número menor o igual a 15");
}

// a === b (preguntar si ambos son iguales)
// a !== b (preguntar si a es diferente a b)
// a < b
// a <= b
// a > b
// a >= b
// && es and
// || es or
// ! es not (negar variable)

n = 3;
if(n > 15){
    console.log("Número mayor a 15");
} else if(n < 5){
    console.log("Número menor a 5");
} else{
    console.log("Número entre 5 y 15");
}

var temperatura = 20;
var estaLloviendo = false; //no está lloviendo

if(temperatura >= 18 && !estaLloviendo){
    console.log("¡Este es un GRAN día para dar un paseo!");
}

if(temperatura >= 18 || !estaLloviendo){
    // Queremos que una condición se cumpla
    console.log("Podemos dar un paseo, pero con paraguas");
}

// *********************************************

// Ciclos

for(var i=0; i<3; i++){
    console.log(i);
}

for(var i=0; i<5; i++){
    console.log("Hola " + i);
}

/*
x = 0
0 < 3 ? SI
IMPRIMIR 0
x= 1

1<3 ? SI
IMPRIMIR 1
x = 2

2<3 ? SI
IMPRIMIR 2
x = 3

3 < 3 ? NO
*/
var x = 0;
while(x < 3){
    console.log(i);
    x++;
}

var inicio = 0;
var final = 10;
while(inicio < final){
    console.log("Inicio: "+inicio+"; Final:"+final);
    inicio++;
    final--;
}

/*
texto = "a"
"a" !== "aaaa" ? SI
->a
texto = "aa"

"aa" !== "aaaa" ? SI
->aa
texto = "aaa"

"aaa" !== "aaaa" ? SI
->"aaa"
texto = "aaaa"

"aaaa" !== "aaaa" ? NO
*/
var texto = "a";
while(texto !== "aaaa"){
    console.log(texto);
    texto += "a";
}