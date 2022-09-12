const numeroTela = document.getElementById('resultado')
var valores = []

function insert(num) {
  var numero = numeroTela.innerHTML;
  numeroTela.innerHTML = numero + num;
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

function calcular(){
  var resultado = numeroTela.innerHTML;

  if(resultado){
    numeroTela.innerHTML = eval(resultado);
  }
}