function criaPessoa(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,

        
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
    
        set nomeCompleto(valor) {
            valor = valor.split('')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`
        },

        altura: a,
        peso: p,

        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}


const p1 = criaPessoa('Luiz', 'Paulo', 1.9, 87)
const p2 = criaPessoa('João', 'Felipe', 1.2, 62)
const p3 = criaPessoa('José', 'Ricardo', 1.8, 110)

console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)