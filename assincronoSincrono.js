/*
  SINCRONO vs ASSINCRONO
*/

function primeira() {
  console.log('primeira')
  for (let index = 0; index < 1; index++){

  }
}

function segunda () {
  console.log('segunda')
}

function terceira () {
  console.log('terceira')
}


setTimeout(primeira, 2000)//Assincrono

//sincrono
segunda()
terceira()
