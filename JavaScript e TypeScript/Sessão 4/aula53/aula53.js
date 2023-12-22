function retornaFuncao(nome) {
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Luiz')
const funcao1 = retornaFuncao('Kevin')

console.dir(funcao)
console.dir(funcao1)

console.log(funcao(), funcao1())