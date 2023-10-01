/// seccion 1: variables 

///1- Declarar una variable `nombre` y asignarle tu nombre. Imprimir en la consola.

const myName = 'Alan';
console.log(myName);

///2- Declarar dos variables numéricas `num1` y `num2`, y calcular su suma. Imprimir el resultado.
var num1 = 8;
var num2 = 5;
console.log(num1 + num2);

///3- Declarar una constante `PI` con el valor 3.14159. Imprimir en la consola.
const pii = 3.14159;
console.log(pii);

/// SECCION 2: FUNCIOJES

/// 4- Crear una función `saludar` que tome un parámetro `nombre` y retorne un saludo personalizado


function greet(nombre) {
    console.log('Hola ' + nombre + ' !');
}

/// 5- Crear una función `esPar` que tome un número como parámetro y retorne `true` si es par, y
//`false` si es impar.

function isEven(number) {
    var result;
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(2));

///6- Crear una función `sumarArray` que tome un array de números como parámetro y retorne la
///suma de sus elementos

var numbers = [1, 2, 3, 4, 5];

function sumarArray(array) {
    var acum = 0;
    for (var i = 0; i < array.length; i++) {
        acum += array[i];

    }
    return acum;
}
console.log(sumarArray(numbers));

/// SECCION 3: OBJETOS LITERALES Y CONSTRUCTORES

/// 7- Crear un objeto literal `persona` con las propiedades `nombre`, `edad` y `edad`

// un objeto se puede declara asi....
var person1 = new Object();
person1.firstName = "Alan";
person1.lastName = "Palavecino";
person1.age = 19;

/// o asii
var person2 = { firstName: "Fiorella", lastName: "Colaizzo", age: 19 }

console.log(person1);
console.log(person2);

///8- Crear un constructor `Producto` que tome parámetros `nombre`, `precio` y `stock`,
/// y cree un objeto con esas propiedades.

function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
}
var producto1 = new Product("fideo", 500, 5);

console.log(producto1);

///9-  Crear un objeto `pelicula` utilizando el constructor `Pelicula` con propiedades como `titulo`,
//`director` y `anio`. 

function movie (title, director, year){
    this.title = title;
    this.director = director;
    this.year = year;
}

var pelicula = new movie("guerra mundial z", "palavecino eduardo", "1998");

console.log(pelicula);

function seeMovie(movie){
    console.log(movie.title);
    console.log(movie.director);
    console.log(movie.year);
}

seeMovie(pelicula);

/// SECCION 4: ARRAYS

/// 10- . Crear un array `frutas` con varios nombres de frutas. Imprimir el tercer elemento del array.
 
var fruits = ["apple", "orange", "banana", "grape"];

/* // recorriendo con un forEach
fruits.forEach(function(fruit){
    console.log(fruit);
})
*/

for(var i=0; i>fruits.length; i++){
    console.log(fruits[i]);
}

/// 11. Agregar una fruta más al final del array `frutas`. Imprimir el array actualizado.

var newFruit = "strawberry";

fruits.push(newFruit);
/// tambien se pyuede hacer de la siguiente manera
//fruits[fruits.length] = newFruit;
console.log("nueva iteracion");

for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

/// 12- Crear una función `filtrarPares` que tome un array de números como parámetro y retorne
/// un nuevo array solo con los números pares.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("ACA VOT A MOSTRAR EL ARRAY ORIGINAL");
for(var i=0; i<array.length; i++){
    console.log(array[i]);
}

function returnArrayEven(array){
  var arrayEven=[];

  for(var i=0; i<array.length;i++){
    if(array[i] % 2 == 0){
        var num = array[i];
        arrayEven.push(num);
    }
  }
  return arrayEven;
}

var arrayEven = returnArrayEven(array);
console.log("aca muestro el array de numeros pares");
for(var i=0; i<arrayEven.length; i++){
    console.log(arrayEven[i]);
}

/// SECCION 5 - FUNCIONES Y OBJETOS CONVINADOS 

/// 13. Crear una función `crearPersona` que tome parámetros `nombre` y `edad`, y retorne un
//objeto persona con esas propiedades.

function Person(nom, ed){
this.nombre = nom;
this.edad = ed;
}


function crearPersona (nombre, edad){
    var p = new Person;
    p.nombre = nombre;
    p.edad = edad;

    return p;
}

var personita = crearPersona("alan", 19 );
console.log(personita);

///14- Crear una función `obtenerInfo` que tome un objeto persona como parámetro y retorne
///una cadena con su información.

function getInfoPerson (person){
    var string1;
    var string2;

    string1 = person.nombre.concat(", ");
    string2 = person.edad.toString();
    string2.concat(" ");
    var result = string1.concat(string2);

    return result;
}

var info = getInfoPerson(personita);
console.log(info);

/// SECCION 6- MAS DE ARRAYS Y FUNCIONES

/// 15- Crear una función `duplicarArray` que tome un array de números como parámetro y
//retorne un nuevo array con cada elemento duplicado.

function duplicarArray (array){
    var nuevoArray = [];
  for(var i=0; i<array.length;i++){
    nuevoArray[i] = array[i]*2;
  }
    return nuevoArray;
}

var arrayDuplic = duplicarArray(numbers);
console.log(numbers);
console.log(arrayDuplic);

//16- Crear una función `invertirCadena` que tome una cadena como parámetro y retorne la
//cadena invertida.

var string = "abdce";

function invertirCadena (cadena){
    const arraydeCaracteres = cadena.split('');
    const arrayInvertido = arraydeCaracteres.reverse();
    const cadenaInvertida = arrayInvertido.join('');

    return cadenaInvertida;
}

console.log(string);
var cadena = invertirCadena(string);
console.log(cadena);

/// 17- Crear una función `filtrarPorLongitud` que tome un array de palabras y un número como
//parámetro, y retorne un nuevo array con las palabras que tienen una longitud mayor al
//número

var arrayPalabras = ["hola", "manuelidades", "sobredosis", "boca", "alvarado", "hijodelviendo"];

function filtrarPorLongitud (array, num){
    var arrayFiltrado = [];
    var a=0;
    for(var i=0; i<array.length;i++){
        
        if(array[i].length > num){
            arrayFiltrado[a]=array[i];
            a++;
        }
    }
    return arrayFiltrado;
}

console.log(arrayPalabras);
var arrayFiltrado = filtrarPorLongitud(arrayPalabras, 5);
console.log(arrayFiltrado);


