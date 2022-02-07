/*
  AJAX - 2005
  Asynchronous javaScript and XML
(Técnica para fazer requisoções para o servidor)

ROTAS

ENDPOINT

METÓDOS:

GET (obter dados)
POST (enviar dados)

*/

const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
  if ((this.readyState == 4 && this.status == 200)) {
    const response = JSON.parse(this.responseText)
    
    console.log(response[0])
  }
}

//abrir conexão
xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true) //true = assincrono

//enviar a conexão
xhttp.send()
