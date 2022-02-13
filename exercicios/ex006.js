const txtMsg = document.querySelector('#txtMsg')
const btnEnviar = document.querySelector('#btnEnviar')
const imgLoading = document.querySelector('#imgLoading')

function lerMensagemDigitada () {
  imgLoading.setAttribute('style', 'display: inline; max-width: 20px;')

  return new Promise((resolve, reject) => {
    let intervalo = setInterval(() => {
      imgLoading.setAttribute('style', 'display: none')
      let msg = txtMsg.value
      document.write(msg)
    }, 10000)

    resolve(intervalo)
    reject()
  })
}
//Evento
btnEnviar.addEventListener('click', lerMensagemDigitada)
