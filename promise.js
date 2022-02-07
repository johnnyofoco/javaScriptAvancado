/*
PROMISE
*/

function exibirNaTela(dados) {
  console.log('exibir na tela', dados)
}

const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () => carregarFotos(exibirNaTela)


function carregarFotos (callback) {
  const xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText)
      
      if (callback) {
        callback()
      }
    }
  }

  //abrir conexão
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true) //true = assincrono

  //enviar a conexão
  xhttp.send()
}
