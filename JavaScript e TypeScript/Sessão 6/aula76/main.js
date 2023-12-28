function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
 Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
 }

 Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
 }

 function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
 }
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = (percentual) => {
   this.preco = this.preco + (this.preco *(percentual / 100))
}

function Caneca(nome, preco, material, estoque) {
   Produto.call(this, nome, preco);
   this.material = material;
   
   Object.defineProperty(this, 'estoque', {
      Enumerator: true,
      configurable: false,
      get: function() {
         return estoque
      },
      set: function(valor) {
         if(typeof valor !== 'number') return;
         estoque = valor
      }
   })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const caneca = new Caneca('caneca', 15, 'ceramica', 10)




 console.log(Caneca)