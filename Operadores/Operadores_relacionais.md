# <span style="color:yellow">Operadores Relacionais</span>

* Os operadores relacionais em JavaScript são utilizados para comparar valores e expressões, retornando um valor booleano (verdadeiro ou falso) com base na relação entre eles.
---

* Utilizando valores literais:

* ">": Operador maior que. Retorna true se o valor à esquerda for maior que o valor à direita, se não, retorna false!

```
console.log(10 > 2); //resultado: true
console.log(20 > 7); //resultado: true 
console.log(100 > 200); //resultado: false
```
---

* "<": Operador menor que. Retorna true se o valor à esquerda for menor que o valor à direita, se não, retorna false!

```
console.log(5 < 10); //resultado: true
console.log(10 < 20); //resultado: true
console.log(50 < 30); //resultado: false
```
---

* ">=": Operador maior ou igual a. Retorna true se o valor à esquerda for maior ou igual ao valor à direita, caso contrário, retorna false.

```
console.log(20 >= 12); //resultado: true
console.log(50 >= 50); //resultado: true
console.log(44 >= 60); //resultado: false
```
---

* "<=": Operador menor ou igual a. Retorna true se o valor à esquerda for menor ou igual ao valor à direita, caso contrário, retorna false.

```
console.log(1 <= 2); //resultado: true
console.log(70 <= 70); //resultado: true
console.log(100 <= 90); //resultado: false
```
---

* "===": Operador de igualdade estrita. Retorna true se o valor à esquerda for igual ao valor à direita, tanto em termos de valor quanto de tipo de dado, caso contrário, retorna false.

```
console.log(7 === 7); //resultado: true
console.log(7 === "7"); //resultado: false
```

---

* "!==": Operador de desigualdade estrita. Retorna true se o valor à esquerda for diferente do valor à direita, em termos de valor ou tipo de dado, caso contrário, retorna false.

```
console.log(10 !== 8); //resultado: true
console.log(10 !== "10"); //resultado: true(ambos sao diferentes)
console.log(10 !== 10); //resultado: false
```