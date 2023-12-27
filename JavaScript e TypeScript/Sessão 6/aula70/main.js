function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

const p1 = new Pessoa('luiz', 'miranda');
delete p1.nome;
const p2 = new Pessoa('maria', 'miranda');

console.log(p1);
console.log(p2);