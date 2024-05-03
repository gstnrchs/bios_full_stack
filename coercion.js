//Description: Ejemplos Coerción Javascript
//Date: 24.04.24


//Coerción Implícita: es la conversión automática o implícita de valores de un tipo de dato a otro (por ejemplo 
//de cadena de) caracteres a numero o de numero a cadena de caracteres).

var suma = 3 + '2'
var multiplicacion = 3 * '2'

console.log(suma)
console.log(multiplicacion)

//Coerción Explícita: es la conversión manual de un tipo de datos a otro.
var a = 3
var b = Number('2')

console.log(a + b)
console.log(multiplicacion)

var a = 3
var b = ('2')

console.log(String(a)+ b)
console.log(multiplicacion)