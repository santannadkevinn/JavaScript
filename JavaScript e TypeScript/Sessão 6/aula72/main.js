function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //configuravel 
        get: () => estoquePrivado,
        set:   (valor) =>{
            if(typeof valor !== 'number'){
                throw new TypeError('merda');
            };
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return  nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    }
}
 const p2 = criaProduto('camisa');
p2.nome = 'Qualquer coisa'
console.log(p2.nome)

// const p1 = new Produto('camisa', 20, 3);
// p1.estoque = 1
// console.log(p1.estoque);

