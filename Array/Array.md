# <span style="color:yellow">Array</span>

* Um array em JavaScript é uma estrutura de dados que permite armazenar uma coleção de elementos, como números, strings, objetos e até mesmo outros arrays.

* Os elementos em um array são organizados em uma sequência ordenada, e cada elemento é associado a um índice numérico, começando por zero.

* Para criar um array em JavaScript, você pode usar a seguinte sintaxe:

```
let meuArray = [elemento1, elemento2, elemento3];
```
---

* Aqui estão alguns conceitos importantes sobre arrays em JavaScript:


## <span style="color:red">Índices:</span>
### Cada elemento em um array é acessado através de um índice numérico. O primeiro elemento está no índice 0, o segundo no índice 1 e assim por diante.
---
## <span style="color:red">Comprimento:</span>
### O comprimento de um array é o número total de elementos contidos nele. Você pode acessar o comprimento de um array usando a propriedade length.

```
console.log(meuArray.length); 
// Exibe o comprimento do array
```
---

* Acesso a elementos: Você pode acessar elementos de um array usando seus índices. Por exemplo:

```
console.log(meuArray[0]); 
// Acessa o primeiro elemento
console.log(meuArray[2]); 
// Acessa o terceiro elemento
```
---

* Exemplo de um Array:

```
const frutas = ["maçã","banana","laranja","uva"];
```
```
console.log(frutas); 
// Saída: ["maçã","banana","laranja","uva"]

console.log(frutas.length); 
// Saída: 4

console.log(frutas[2]); 
//Saída: laranja
```
