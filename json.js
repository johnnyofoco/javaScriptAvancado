/*
JSON = JAVASCRIPT OBJECT NOTATION
*/

const objeto = {
  nome: 'Fulano',
  idade: 23
}

console.log('objeto:', objeto)

const json = JSON.stringify(objeto)
console.log(`json: ${json}`)

const jsonParseado = JSON.parse(json)
console.log('jsonParseado(volta a ser um objeto):', jsonParseado)
