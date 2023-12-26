// Filter -> sempre irá retornar um array, com a mesma quantidade de elementos ou menos

// retornando valores maiores que 10

const numeros = [5, 50, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros.filter(valor => valor > 10);



// retorne as pessoas que tem nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade >= 50)
//const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().slice(-1) == 'a')
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(nomeTerminaComA);

