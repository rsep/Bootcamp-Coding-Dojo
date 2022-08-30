// DESAFIO #1 Imprimir impares 1-20
for (var i=1; i<21; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}

// DESAFIO #2 Disminuir múltiplos de 3
for (var i=100; i>0; i--){
    if(i%3 === 0){
        console.log(i);
    }
}

// DESAFIO #3 Imprimir secuencia
var num = 4;
for (var i=0; i<6; i++){
    console.log(num);
    num = num-1.5;
}

// DESAFIO #4 Sigma (sumar todos los valores del 1 al 100)
var sum = 0;
for (var i=1; i<101; i++){
    sum = sum + i;
}
console.log(sum);

// DESAFIO #5 Factorial (multiplicar todos los valores del 1 al 12)
var product = 1;
for (var i=1; i<13; i++){
    product = product * i;
}
console.log(product);