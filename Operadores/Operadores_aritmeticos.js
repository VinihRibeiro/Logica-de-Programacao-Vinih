//Os operadores aritméticos são utilizados para realizar cálculos matemáticos, como adição, subtração, multiplicação e divisão. 
//Além disso, também existem operadores para calcular o resto da divisão !


//Usando valores literais 
console.log(10 + 10); //resultado: 20
console.log(15 - 10); // resultado: 05
console.log(8 * 4); //resultado: 32
console.log(20 / 5); //resultado: 04
console.log(8 % 3); //resultado: 02

//Usando variaveis
let a = 80;
let b = 50;

console.log(a + b); //resultado: 130
console.log(a - b); //resultado: 30
console.log(a * b); //resultado: 4000
console.log(a / b); //resultado: 1.6
console.log(a % b); //resultado: 30

//Usando operadores numa mesma expressao numerica
a = a + b - b * a / b;
console.log(a); //resultado: 50