# <span style="color:yellow">Removendo Objetos</span>

* Para remover um objeto em JavaScript, você pode usar a palavra-chave delete. No entanto, lembre-se de que delete é usado para remover uma propriedade de um objeto, não o objeto em si. Aqui estão alguns exemplos de como você pode usar delete para remover uma propriedade de um objeto:

* Exemplo:

```
const pessoa = {
    nome: "Vinicius",
    idade: 19,
  };
  
  console.log(pessoa); // Saída: {nome: "Vinicius", idade: 19}

  delete pessoa.idade; // Remove a propriedade "idade" do objeto
  
  console.log(pessoa); // Saída: {nome: "Vinicius"}
  ```