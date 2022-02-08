/*
desestructuringAssignment (desestruturação de atribuição)
*/

const obj = {
  nome: 'fulano',
  idade: 35
}

const{ nome, idade} = obj







function transformarEmJson (response) {
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

botaoCarregar.onclick = aoClicarBotao

async function aoClicarBotao () {
  const dados = await fetch('https://jsonplaceholder.typicode.com/photos')
    .then(transformarEmJson)
    .catch(exibirErro)
  
  console.log(dados)
}
