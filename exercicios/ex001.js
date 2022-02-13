
const alunos = [
      {
        nome: 'Maria',
        sobrenome: 'da Silva',
      },
      {
        nome: 'José',
        sobrenome: 'Moreira',
      },
      {
        nome: 'Paulo',
        sobrenome: 'Henrique',
      },
      {
        nome: 'Pedro',
        sobrenome: 'Souza',
      },
]


const alunosFinalMap = alunos.map(alunos => alunos.nome + ' ' + alunos.sobrenome)
console.log(alunosFinalMap)