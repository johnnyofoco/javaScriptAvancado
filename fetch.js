/*
FETCH
*/

function transformarEmJson(response) {
  //console.log(response)
  //console.log(response.json)
  return response.json()
}

function exibirNaTela (dados) {
  console.log('exibir na tela', dados)
}

function exibirErro (dados) {
  console.log('Ops, deu erro!')
}

const botaoCarregar = document.querySelector('#botaoCarregar')

const configs = {
  method: 'GET',
  header: {}
}

botaoCarregar.onclick = () =>
  fetch('https://jsonplaceholder.typicode.com/photos',configs)
    .then(transformarEmJson)
    .then(exibirNaTela)
    .catch(exibirErro)