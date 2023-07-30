// Em JavaScript, uma função é um bloco de código que pode ser executado repetidamente. Uma função é uma forma de organizar código e tornar o código mais legível e reusável.

//Para criar uma função em JavaScript, use a palavra-chave function. A sintaxe para uma função é a seguinte:

// function nomeDaFuncao(parametros) {
  // corpo da função
// }

// O nome da função é o nome que você usa para chamar a função. Os parâmetros são as variáveis que você passa para a função. O corpo da função é o código que é executado quando a função é chamada.

//Para chamar uma função, use seu nome, seguido de parênteses. Se a função tiver parâmetros, você deve passar os valores dos parâmetros entre os parênteses.

//Exemplo:

function soma(a , b){
    console.log (a + b);
}

soma(1,2); // Saida: 3
 

//Outro exemplo:

function exibirData(d , m , a){
  console.log(`${d}/${m}/${a}`);
}

exibirData(10,7,2004); // Saida: 10/7/2004