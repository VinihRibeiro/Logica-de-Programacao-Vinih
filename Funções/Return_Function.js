// Em JavaScript, return é uma instrução que retorna um valor de uma função. O valor retornado pode ser qualquer valor, incluindo um número, uma string, um objeto ou uma função.

// A instrução return pode ser usada em qualquer lugar dentro de uma função, mas geralmente é usada no final da função. Quando return é executado, a execução da função é interrompida e o valor retornado é retornado para o local da chamada da função. 

//Exemplo: 

function sempreRetornaUm(){
    return 1;
}

let valor = sempreRetornaUm();
console.log(valor); // Saida: 1

//Exemplo de Return com IF e Else na estrutura:

function textoOuNumero(retornaTexto){
    if(retornaTexto){
        return "Sou um texto!";
    } else{
        return 123;
    }
}

let resultado = textoOuNumero(true);
console.log(resultado); // Saida: Sou um texto!
