function* geradora1() {
  //codigo....
  yield 'valor 1';
  //codigo...
  yield 'valor 2'
  //codigo
  yield 'valor 3'
}

//função geradora infinita
function* geradora2() {
  let i = 0

  while(true) {
    yield i
    i++ 
  }
}

//uma função geradora chamando outra função geradora
function* geradora3(){
  yield 1
  yield 2
  yield 3
} 

function* geradora4() {
  yield* geradora3()
  yield 4
  yield 5
  yield 6
}

let g4 = geradora4()
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)
console.log(g4.next().value)

