/*
ARROWS FUNCTIONS

ECS6

As funções de seta nos permitem escrever um sintaxe de
função mais curta.

*/

//retorno implicito (sem necessidade das chaves: '{}' )
const soma = (param1, param2) => param1 + param2
const resultado = soma(11, 2)
console.log(resultado)

//Se apenas 1 parâmetro pode remover o paranteses
const teste = param1 => param1
console.log(teste('ok'))


const botao = document.querySelector('#botao')

botao.onclick = () => {
  console.log(this)
}