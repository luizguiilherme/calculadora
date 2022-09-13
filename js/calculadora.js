const numeroTela = document.getElementById('resultado')
var espaco = '';
var valores = []

// window.addEventListener('keydown', teclado);

function insert(num) {
  if(numeroTela == 0){
    numeroTela.innerHTML = num
  }else {
    numeroTela.innerHTML += `${num}`
  }

}

function sinal(sinal){  
  if(valores.length <= 1) {
    espaco = numeroTela.innerHTML.split(' ')
    valores.push(parseFloat(numeroTela.innerHTML))
    numeroTela.innerHTML += ` ${sinal} `
    valores.push(sinal)
    
  }
  console.log(valores);
}

function ponto () {
  var caracteres = [];
  var numerosConta1 = []
  var numerosConta2 = []

  caracteres.push(numeroTela.innerHTML.trim().split(' '));
  caracteres.push(caracteres[0][0].split(''));

  if(caracteres[0].length == 3 ) {
    caracteres.push(caracteres[0][2].split(''));
    existePonto(numerosConta2);
  }

  existePonto(numerosConta1);

  function existePonto(valor) {
    for(let i in valor[0]) {
      if (valor[0][i] == '.') {
        var acumula = '.';
      }
    }

    if(!(acumula == '.')){
      numeroTela.innerHTML += '.';
    }
  }
}

function mudarSinal() {
  const caracteresDaConta = numeroTela.innerHTML.trim().split(' ');
  let caracteresValor1 = caracteresDaConta[0].split('')

  let valor1 = '';
  let valor2 = '';

  if(caracteresDaConta.length == 3) {
    var caracteresValor2 = caracteresDaConta[2].split('')
    
    if (caracteresValor2[0] == '-') {
      caracteresValor2.shift();
      imprimirValor(caracteresValor2, valor2, caracteresDaConta);
    } else {
      caracteresValor2.unshift('-');
      imprimirValor(caracteresValor2, valor2, caracteresDaConta);
    }
  }

  if (valores.length == 0) {
    if(caracteresValor1[0] == '-') {
      caracteresValor1.shift()
      imprimirValor(caracteresValor1, valor1)
    } else {
      caracteresValor1.unshift('-')
      imprimirValor(caracteresValor1, valor1)
    }
  }

  function imprimirValor(caracteresValor, valorNumero, caracteresConta) {
    caracteresValor.forEach(valor => {
      valorNumero += valor;
    });
    if (caracteresConta != undefined) {
      numeroTela.innerHTML = `${caracteresConta[0]} ${caracteresConta[1]} ${valorNumero}`
    }else {
      numeroTela.innerHTML = valorNumero;
    }
  }

}

function calcular(){
  var resultado = 0;

  var operacao = valores[1]

  function tratarResultado(operacao) {
    valoresEspaco = numeroTela.innerHTML.split(' ');
    valores.push(valoresEspaco[2])

    switch(operacao) {
      case '-':
        resultado = parseFloat(valores[0]) - parseFloat(valores[2])
        limpar(resultado);
        break;
      case '+':
        resultado = parseFloat(valores[0]) + parseFloat(valores[2])
        limpar(resultado);
        break;
      case '*':
       resultado = parseFloat(valores[0]) * parseFloat(valores[2])
       limpar(resultado);
       break;
      case '/':
        resultado = parseFloat(valores[0]) / parseFloat(valores[2]) 
        limpar(resultado);
        break;      
    }
  }


  if(operacao == '-'){
    tratarResultado('-')
  }else if (operacao == '+'){
    tratarResultado('+')
  }else if (operacao == '*') {
    tratarResultado('*')
  }else if (operacao == '/') {
    tratarResultado('/')
  }
  valores.splice(0, 3)
}

function limpar(valor) {
  valores.splice(0, 3)
  numeroTela.innerHTML =  valor;
}

function apagar (){
  var caracteres = numeroTela.innerHTML.trim().split('');
  var caracteresTela = '';
  caracteres.pop()

  for(let apagarCaracter in caracteres){
    caracteresTela += caracteres[apagarCaracter]
  }

  if((caracteresTela == [])||(caracteres == '-')){
    numeroTela.innerHTML = '';
  }else {
    numeroTela.innerHTML = caracteresTela;
  }

  if(caracteres == 0) {
    valores.pop
  }
}

function teclado(){
  const numeros = '0123456789'
  const operadores = '+-/x'
  var tecla = event.key
  if(numeros.includes(tecla)){
      pegarNumero(tecla)
  }
  else if(operadores.includes(tecla)){
      verificarSinal(tecla)
  }
  else switch(tecla){
      case '*':
          verificarSinal('x')
          break;
      case '%':
          porcentagem()
          break;
      case '.':
      case ',':
          colocarPonto();
          break;
      case '=':
      case 'Enter':
          darResultado();
          break;
      case 'Backspace':
          apagarUltimo()
          break;
      case 'Escape':
          limpar(0);
          break;
  }
}
