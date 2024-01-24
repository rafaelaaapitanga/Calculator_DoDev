///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(n1, n2, operador){
  let resultado;
  let num1 = parseInt(n1);
  let num2 = parseInt(n2);

  switch(operador){
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      resultado = num1 / num2;
      break;
    case 'e':
      resultado = 1;
      for (let i = 0; i < num2; i++) {
        resultado *= num1; // Isso é feito repetidamente até que o número de iterações seja igual ao expoente (num2)
        // a cada iteração, o resultado é multiplicado por num1 (base)
      }
      break;
  }
  if (resultado == undefined || resultado > 1000000)
    resultado == 'ERRO'

  return resultado
  
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}