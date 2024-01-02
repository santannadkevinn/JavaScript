class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }
    //Metodo de instancia
    aumentarVolume() {
        this.volume += 2
    }

    baixarVolume() {
        this.volume -= 2
    }

    //metodo statico
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }
}


const controle1 = new ControleRemoto('LG')
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()

console.log(controle1)

ControleRemoto.trocaPilha()