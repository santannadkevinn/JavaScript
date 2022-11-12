let valor = document.getElementById('fnum')
let select = document.querySelector('#flista')
let res = document.getElementById('res')

let list = []

function isNumber(n){
    if (n >= 1 && n <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(n) != -1){
        return true
    }else{
        return false
    }
}

function adcionar(){
    if (isNumber(valor.value) && !inList(valor.value, list)){
        list.push(valor.value)
        let iten = document.createElement('option')
        iten.text = `Valor ${valor.value} foi adcionado`
        select.appendChild(iten)

    }else{
        window.alert('Numero invalido ou já inserido')
    }
    
    
}

function result() {
    let total = document.createElement('p')
    total.text = `Ao todo, temos <strong>${list.length}</strong> números cadastrados.`
    res.appendChild(total)
    let maior = document.createElement('p')
    maior.text = `O maior valor informado foi ${Math.max(...list)}.`
    res.appendChild(maior)
}