// switch - A instrução switch no JavaScript é uma estrutura condicional usada para executar diferentes blocos de código dependendo do valor de uma expressão. A instrução switch é semelhante à instrução if, mas é mais eficiente para lidar com muitos valores possíveis.

//Exemplo:

let dia = 5;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
}

// Saída: Quinta-feira

//A instrução break é usada para encerrar o bloco de código atual e mover o controle para a próxima instrução após a instrução switch. Se a instrução break for omitida, o controle será movido para o próximo bloco de código case.

//Outro Exemplo:

let nota = 5

switch (nota){
    case 10:
        console.log("Parabens");
        break;
    case 5:
        console.log("Mediano");
        break;
    case 0:
        console.log("Precisa melhorar");
        break;        
}

//Saída: Mediano
