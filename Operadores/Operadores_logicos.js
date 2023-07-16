//Os operadores lógicos são usados para realizar operações de lógica booleana em valores ou expressões booleanas. Eles permitem que você combine valores booleanos (verdadeiro ou falso) ou convertam valores não booleanos em booleanos para realizar avaliações condicionais mais complexas.


//Operador lógico AND (&&):
//O operador lógico AND retorna verdadeiro apenas se ambos os operandos forem verdadeiros. Se nao, ele retorna falso.

const a = true;
const b = false;

console.log(a && b); //Resultado: false, pois a e b não sao verdadeiros. 
console.log(a && true); //Resultado: true, pois a e true sao verdadeiros.

//outro exemplo: 

let diaEnsolarado = true
let finalDeSemana = true

console.log(diaEnsolarado && finalDeSemana); //Resultado: true, pois diaEnsolarado e finalDeSemana sao verdadeiros.

//Operador lógico OR (||):
//O operador lógico OR retorna verdadeiro se pelo menos um dos operandos for verdadeiro. Se ambos os operandos forem falsos, ele retornará falso.

const c = true;
const d = false;

console.log(c || d); //Resultado: true, pois pelo menos um dos valores que no caso (c) é verdadeiro.
console.log(false || false); //Resultado: false, pois ambos valores sao falsos.

//Operador lógico NOT (!):
//O operador lógico NOT inverte o valor de um único operando. Se o operando for verdadeiro, ele retornará falso, e se o operando for falso, ele retornará verdadeiro.

const e = false;
const f = true;

console.log(!e); //Resultado: true, pois o valor é falso, e o NOT inverte para true. 
console.log(!f); //Resultado: false, pois o valor é true, e o NOT inverte para false.