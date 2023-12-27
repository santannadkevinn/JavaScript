function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(percentual) {
    this.desconto.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.desconto.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50);

const p2 = {
    nome: 'caneca',
    preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);

p2.aumento(10)

const p3 = Object.create(Object.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42
    }
})

console.log(p3)