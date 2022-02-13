const alunos = [
  {
    nome: 'Maria',
    sobrenome: 'da Silva',
    nota: 10
  },

  {
    nome: 'José',
    sobrenome: 'Moreira',
    nota: 4
  },

  {
    nome: 'Paulo',
    sobrenome: 'Henrique',
    nota: 7
  },

  {
    nome: 'Sara',
    sobrenome: 'Souza',
    nota: 5
  },

  {
    nome: 'Clara',
    sobrenome: 'Barbosa',
    nota: 9
  },

  {
    nome: 'Rodrigo',
    sobrenome: 'Barros',
    nota: 4
  },

  {
    nome: 'Renato',
    sobrenome: 'Barros',
    nota: 7
  },

  {
    nome: 'Andrea',
    sobrenome: 'Batista',
    nota: 6
  },

  {
    nome: 'Carla',
    sobrenome: 'Campos',
    nota: 3
  }
]
console.log(alunos)

const form = document.querySelector('#form')
const btnFiltrar = document.querySelector('#btnFiltrar')
let notaTxt = document.querySelector('#notaTxt')

function listarFiltro () {
  let nota = parseInt(notaTxt.value)

  if (isNaN(nota) || nota > 10 || nota < 0) {
    alert('Informe uma nota entre 0 e 10')
  } else {
    let alunoPorNota = alunos.filter(aluno => aluno.nota == nota)

    form.innerHTML = ''

    alunoPorNota.forEach((aluno, ind) => {
      form.innerHTML += `<ul>
                          <li>${alunoPorNota[ind].nome} ${alunoPorNota[ind].sobrenome}  | Nota: ${alunoPorNota[ind].nota}</li>
                        </ul>`
    })
  }
}

btnFiltrar.addEventListener('click', listarFiltro)
