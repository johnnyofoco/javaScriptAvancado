// crie uma função que retorne uma promise
// essa função deverá levar 10 segundos para ser resolvida com o método resolve(
// ela deve resolver com texto: 'Ok, promise resolvid1!
// você deve exibir esse texto no console

function ex005 () {
  return new Promise((resolve, reject) => {
    let intervalo = setInterval(() => {
      console.log('Ok, promise resolvida!')
    }, 10000)
    
    resolve(intervalo)
    reject()
  })
}

ex005()