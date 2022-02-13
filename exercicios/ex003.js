const aluno = {
  nome: 'Maria',
  sobrenome: 'da Silva',
  notas: [7, 10, 8, 5, 7, 9]
}

const qtdBimestres = aluno.notas.length

const somaNotas = aluno.notas.reduce((acc, curr) => {
  acc += curr
  return acc
},0)

const media = Math.round(somaNotas / qtdBimestres)

console.log(`A media da ${aluno.nome} ${aluno.sobrenome} foi ${media} para o total de ${qtdBimestres} bimestres.`)
