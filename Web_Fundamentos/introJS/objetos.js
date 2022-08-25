// Objetos (diccionarios)
var estudiante1 = {
    nombre: "Elena",
    apellido: "De Troya",
    id: 1234,
    cursos: ["Fundamentos de la Web", "Python"],
    graduado: false,
    foto: "ruta/img.png"
};

var auto1 = {
    marca: "Nissan",
    modelo: "Versa",
    color: "blanco",
    placas: "ABC1234"
};

console.log("Modelo del auto es "+auto1.modelo);
console.log(estudiante1.cursos);

// modificar valor de una propiedad de un objeto
auto1.modelo = "Todo terreno";
console.log(auto1.modelo);

auto1.anio = 1999;
console.log(auto1.anio);

var listaEstudiantes = [
    {nombre: "Elena", apellido: "De Troya", id: 1234}, //0
    {nombre: "Juana", apellido: "De Arc", id: 2345},   //1
    {nombre: "Pablo", apellido: "Picasso", id: 3456}   //2
];
//Cómo modificaríamos el apellido de Juana?
listaEstudiantes[1].apellido = "De Arco";
console.log(listaEstudiantes);