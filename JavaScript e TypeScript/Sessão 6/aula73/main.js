const produto = {nome: 'Produto', preco: 1.8, material: 'Porcelana'};

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}