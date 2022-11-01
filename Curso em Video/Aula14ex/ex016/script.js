function contar(){
    let inicio = document.getElementById('inicio')
    let ini = inicio.value
    let fim  = document.getElementById('fim')
    let end = fim.value
    let passo = document.getElementById('passo')
    let step = passo.value
    let res = document.getElementById('res')
    
    for(let i = ini; i <= end; i += step){
        res.innerHTML = ` Porra ${i}`
    }
}    
