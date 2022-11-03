function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('merda')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
         window.alert('[ERRO] Faltan dados!')
    }else {
        res.innerHTML = "merda"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c}`
        }
    }
   
}
