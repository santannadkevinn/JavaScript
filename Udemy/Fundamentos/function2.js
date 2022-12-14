//armazenando uma função em uma variavel

const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(2,3)


//função arrow

const soma = (a, b) => {
    return a + b 
}

console.log(soma(2,3))

//retornmo implicito
const subtraao = (a, b ) => a - b

console.log(subtraao(2,3))