// arguments sustenta todos os parametros enviados
function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }
    console.log(total)
}

funcao(1, 2, 3, 4, 5, 6, 7)


function funcao1(a, b, c, d, e, f){
    console.log(a, b, c, d, e, f, )
}
funcao1(1, 2, 3)

function funcao2(a, b = 2, c = 10){
    b = b || 2;
    console.log(a + b + c)
}

funcao2(2, undefined, 10)

function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

funcao3({nome:'Kevin', sobrenome: "Sant'Ana", idade:23.5})

function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3)
}
funcao4(['Kevin', "Sant'Ana", 23.5])

function conta(operador, acumulador, ...numeros){
    for(let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50)