const clientes = [
  { name: 'Fulano', lastname: 'Da Silva' },
  { name: 'Ciclano', lastname: 'Santos' },
  { name: 'Beltrano', lastname: 'Moreira' },
]

// ['Fulano Da Silva', 'Ciclano Santos']

let clientesFinal = []
//forEach pode ser usado para várias coisas, porém o map manipula apenas arrays
clientes.forEach(function (cliente) {
  clientesFinal.push(cliente.name + ' ' + cliente.lastname)
})

console.log(clientesFinal)

//Map serve para percorrer arrays e montar um novo array
const clientesFinalMap = clientes.map(cliente => cliente.name + ' ' + cliente.lastname)
console.log(clientesFinalMap)