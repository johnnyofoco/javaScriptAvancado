const clientes = [
  { name: 'Fulano', lastname: 'Da Silva', age: 14 },
  { name: 'Ciclano', lastname: 'Santos', age: 18 },
  { name: 'Beltrano', lastname: 'Moreira', age: 20 }
]

// acc = accumulator
// curr = current

const clientesFinal = clientes.reduce(
  (acc, curr) => {
    if (curr.age >= 18) {
      acc.pass.push(curr)
    } else {
      acc.fail.push(curr)
    }

    return acc
  },
  {
    pass: [],
    fail: []
  }
)

console.log(clientesFinal)

// '2 - 3 - 4 - 5'
const numeros = [0, 1, 2, 3, 4]

const numerosFinal = numeros.reduce((acc, curr) => {
  if (curr <= 3) {
    acc += `${curr + 1 + ' - '}`
  } else {
    acc += `${curr + 1}`
  }
  return acc
}, '')

console.log(numerosFinal)
