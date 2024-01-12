function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(false)

        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
    
   
}

esperaAi('Conexão com BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Buscando banco de dados...', rand(1, 5))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi(22222, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
    })

console.log('Isso será exibido antes de qualquer Promise!')