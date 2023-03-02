let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //retorn inplicito
console.log(dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = () => 'ola'
ola = _ => 'ola' //possui params
console.log(ola())