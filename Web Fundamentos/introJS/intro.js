var num = 1;

var text = "Variable cadena";
var bool = true;

console.log(text);


var num1 = 1;
var num2 = 2;
var suma = num1 + num2;
console.log(suma);

var nombre = "Elena de Troya";
var mensaje  = "Mi nombre es: ";
console.log(mensaje+nombre);

var combinamosTexto = "ABC";
console.log(combinamosTexto + num1); // ABC1
console.log(combinamosTexto + num1 + num2); // ABC12
console.log(num1 + num2 + combinamosTexto); // 3ABC
console.log(combinamosTexto + (num1+num2)); // ABC3

var orden = 10+20/6; // 13.333333333333334
console.log(orden);

var orden2 = (10+20)/6; // 5
console.log(orden2);

var nombre_completo = "Juana";
nombre_completo += " De Arco";
// al valor que ya tenía nombre_completo le agrego a lo que tenía lo nuevo (+=)
console.log(nombre_completo);

var n = 13;
n += 7;
n *= 3;
n /= 2; //30
console.log(n);
