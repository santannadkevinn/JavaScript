class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    fala() {
        console.log(`${this.nome} esta falando!`)
    }
}

function Pessoa2 (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = () => {
    console.log(`${this.nome} esta falando!`)
}

const p1 = new Pessoa('Kevin', "Sant'Ana")
console.log(p1)

const p2 = new Pessoa2('Samantha', "Sant'Ana")
console.log(p2)