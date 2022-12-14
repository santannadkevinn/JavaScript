let valor 
console.log(valor)

valor = null
console.log(valor)
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)
//delete produto .preco
produto.preco = null // sem preço

console.log(!!produto.preco)
console.log(produto)