function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'Original:' + this.nome + ' ' + this.sobrenome
 }


 Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
 

 const pessoa1 = new Pessoa('Luiz', 'o.');
 const pessoa2 = new Pessoa('Maria', 'a.')

 console.dir(pessoa1.nomeCompleto)
 console.log(pessoa2)