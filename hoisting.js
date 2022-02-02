/*
HOISTING (IÇAR, ERGUER)

Hoisting é o comportamento padrão do javaScript de mover as
declarações para o topo de um escopo.

*/

function teste () {
  outraFuncao() //Hoisting

  function outraFuncao () {
    console.log('ok sou a outra função')
  }
}

teste()
