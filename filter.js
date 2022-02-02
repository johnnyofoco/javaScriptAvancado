const clientes = [
  { name: 'Fulano', lastname: 'Da Silva', age: 14 },
  { name: 'Ciclano', lastname: 'Santos', age: 18 },
  { name: 'Beltrano', lastname: 'Moreira', age: 20 }
]

//Filter apenas manipula arrays, retornando um novo array considerando alguma condição específica
/*
const clientesMaiores = clientes.filter(cliente => {
  return cliente.age >= 18 ? true : false //operador ternário: '?'
})
*/
//Manipulando o array clientes (Filtrando apenas os indices com age maior ou igual a 18)
const clientesMaiores = clientes.filter(cliente => cliente.age >= 18)

console.log(clientesMaiores)
