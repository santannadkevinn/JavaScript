function falaOi(){
    console.log('Oei');
}
falaOi();

const souUmDado = function() {
    console.log('Sou Um Dado');
}
souUmDado();

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo!');
    funcao();
}

executaFuncao(souUmDado);


const funcaoArrow = () => {
    console.log('Sou uma arrow function.')
}
 funcaoArrow()


const obj = {
    falar(){
        console.log('Estou falando....')
    }
}
obj.falar()