/*
PROMISE (PROMESSA)
 executa uma função com a promessa que assim que terminar ela irá executar a promise.
*/

function exibirNaTela (dados) {
  console.log('exibir na tela', dados)
}

function exibirErro (dados) {
  console.log('Ops, deu erro!')
}



const botaoCarregar = document.querySelector('#botaoCarregar')

botaoCarregar.onclick = () =>
  fetch('https://jsonplaceholder.typicode.com/photos', 'GET')
    .then(exibirNaTela)
    .catch(exibirErro)

function fetch(url, method) {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(this.responseText)

        resolve(response)
      }

      if (this.status === 404) {
        reject()
      }
    }

    //abrir conexão
    xhttp.open(method, url, true) //true = assincrono

    //enviar a conexão
    xhttp.send()
  })
}
