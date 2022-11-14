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
        list.push(parseInt(valor.value))
        let iten = document.createElement('option')
        iten.text = `Valor ${valor.value} foi adcionado`
        select.appendChild(iten)
        res.innerText = ''
    }else{
        window.alert('Numero invalido ou já inserido')
    }
    
    
}

function result(){
    //res.innerHTML = typeof(list[0])
    total(), greater(), less(), sum(), division()
}

function total() {
    let total = document.createElement('p')
    total.setAttribute('id', 'length-value')
    let totall = document.createTextNode(`Ao todo, temos ${list.length} números cadastrados.`)
    total.appendChild(totall)
    res.appendChild(total)

    

    
}

function greater(){
    let greater = document.createElement('p')
    greater.setAttribute('id', 'greater')
    let greaterr = document.createTextNode(`O maior valor informado foi ${Math.max(...list)}.`)
    greater.appendChild(greaterr)
    res.appendChild(greater)
}

function less(){
    let less = document.createElement('p')
    less.setAttribute('id', 'less')
    let lessr = document.createTextNode(`O menor valor informado foi ${Math.min(...list)}.`)
    less.appendChild(lessr)
    res.appendChild(less)
}

function sum(){
    let sum = document.createElement('p')
    sum.setAttribute('id', 'sum')
    var su = 0;
    for(var i =0;i<list.length;i++){
        su+=list[i];
    }
    let summ = document.createTextNode(`Somando todos os valores, temos ${su}`)
    sum.appendChild(summ)
    res.appendChild(sum)
}

function division() {
    var su = 0;
    for(var i =0;i<list.length;i++){
        su+=list[i];
    }
    let division = su / list.length
    let flo = parseFloat(division)
    
    let div = document.createElement('p')
    div.setAttribute('id', 'division')
    let divv = document.createTextNode(`A média dos valores digitados é ${flo}`)
    div.appendChild(divv)
    res.appendChild(div)
}