function carregar(){
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = "#b9846f"
        //Boa tarde
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#51515e'
    }
}
