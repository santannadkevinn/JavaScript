function Pessoa(nome, sobreNome) {
    const ID = 123456
    constmetodoInterno = function() {

    }

    this.nome = nome
    this.sobreNome = sobreNome
    this.metodo = function () {
        console.log(this.nome +': sou um metodo')
    }
}

let p1 = new Pessoa('Kevin', "Sant'Ana")
let p2 = new Pessoa('Samantha', "sant'Ana")

console.log(p1.nome)
