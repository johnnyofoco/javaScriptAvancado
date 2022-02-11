/*
desestructuringAssignment (desestruturação de atribuição)
*/

const obj = {
  nome: 'fulano',
  idade: 35
}

//desestructuringAssignment:
const {
  nome: nomeDoUsuario,//da pra fazer uma espécie de alias
  idade
} = obj //cria-se uma varíavel para cada propriedade do objeto

console.log(nomeDoUsuario)
console.log(idade)

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
  const dados = await fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(transformarEmJson)
    .catch(exibirErro)

  //aplicando desestructuringAssignment no objeto dados
  const {name, email, phone} = dados
  console.log(name, email, phone)
}
