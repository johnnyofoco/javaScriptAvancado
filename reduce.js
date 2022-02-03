const clientes = [
  { name: 'Fulano', lastname: 'Da Silva', age: 14 },
  { name: 'Ciclano', lastname: 'Santos', age: 18 },
  { name: 'Beltrano', lastname: 'Moreira', age: 20 }
]

function teste() {
  clientes.forEach((cliente) => console.log(cliente.lastname))
  
}

teste()

