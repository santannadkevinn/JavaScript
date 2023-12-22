

function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes()
        },
        
        btnClear() {
            this.display.value = ''
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1)
        },

        
        
        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target

                if(el.classList.contains('btn-num')){
                    
                    this.btnParaDisplay(el.innerText)
                }
                if (el.classList.contains('btn-clear')) {
                    this.btnClear()
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }

}


const calculadora = criaCalculadora()
calculadora.inicia()