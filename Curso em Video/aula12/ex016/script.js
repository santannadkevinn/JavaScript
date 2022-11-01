function verificar(){
    let data = new Date()
    let ano  = data.getUTCFullYear()
    let fano =  document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let bcolor = document.querySelector('body')
        let img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bb-boy.png')
                bcolor.style.background = '#1f3447'
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','manha.png')
                bcolor.style.background = '#7b7a74'
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'man.png')
                bcolor.style.background = '#a6afaa'
            }else{
                //idoso
                img.setAttribute('src','idoso-homem.png')
                bcolor.style.background = '#c6c6c6'
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bb-girl.png')
                bcolor.style.background = '#c6d2d9'
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'joven-mulher.png')
                bcolor.style.background = '#b8d4d7'
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'woman.png')
                bcolor.style.background ='#b8cbc9'
            }else{
                //idoso
                img.setAttribute('src', 'idosa-mulher.png')
                bcolor.style.background = '#1a1511'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detequitamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        res.appendChild(bcolor)
    }
}