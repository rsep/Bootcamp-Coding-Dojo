/* FUNCIONES DE ARRAYS */
var nums = [3, 2, 4, 6, 7];
for(var i=0; i<nums.length; i++){
    console.log(i);
}

console.log("*****");

//Siempre que tengamos un forEach este va a mandar el valor, la posición y el arreglo
nums.forEach(function (num, posicion, arreglo){ //Función anónima. 
    console.log("Posición:"+posicion+" , Valor:"+num+", Arreglo:"+arreglo);
})

// function imprime(num, posicion, arreglo){
//     console.log(num);
// }

// nums.forEach(imprime);

/* WHILE cuando quieres manipular más los datos de condicional */
var inicio = 0;
var final = 10;
while(inicio < final){
    console.log("Inicio:"+inicio+" Final:"+final);
    
    if(inicio%2 == 0) { //Si es múltiple de 2
        inicio++;
    }else {
        inicio += 2;
    }
    
    //final--;
}
