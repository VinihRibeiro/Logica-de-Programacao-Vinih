# <span style="color:yellow">Objetos</span>

* Um objeto em JavaScript é uma entidade independente que contém dados e métodos. Os objetos são semelhantes aos objetos do mundo real, como uma pessoa ou um carro. Uma pessoa tem propriedades, como nome, idade e altura, e métodos, como andar, falar e comer. Um carro tem propriedades, como marca, modelo e cor, e métodos, como dirigir, acelerar e frear.

* Em JavaScript, os objetos são criados usando o construtor Object( ) ou a sintaxe de inicialização de objeto. A sintaxe de inicialização de objeto é mais concisa e é a forma mais comum de criar objetos.

* Exemplo:

```
const pessoa ={
    nome: "Vinicius",
    idade: 19,
};

console.log(pessoa.nome); 
// Saída: Vinicius
console.log(pessoa.idade); 
// Saída: 19
```
---

* Outro exemplo:

```
const data = {
    dia: 10,
    mes: 7,
    ano: 2004,
};

console.log(`${data.dia}/${data.mes}/${data.ano}`);
// Saída: 10/7/2004
```
