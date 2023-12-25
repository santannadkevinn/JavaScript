function* geradora1() {
  //codigo....
  yield 'valor 1';
  //codigo...
  yield 'valor 2'
  //codigo
  yield 'valor 3'
}

function* geradora2() {
  let i = 0

  while(true) {
    yield i
    i++ 
  }
}

