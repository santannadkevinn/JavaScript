// 070.987.720-03

function ValidadorDeCPF(){
    let display = document.querySelector('.cpf')
    let cpf = display.value
    this.iniciar = () => {
        this.transNumber()
        this.calculo()
      };

    this.transNumber = () => {
        let cpfLimpo = cpf.replace(/\D+/g, '');
        let cpfArray = Array.from(cpfLimpo)
        let cpfPronto = []
        for(let i = 0; i < cpfArray.length; i++){
            cpfPronto.push(parseInt(cpfArray[i]))
        }
        console.log(cpfLimpo)
        return cpfPronto
    }

    this.calculo = () => {
        let operando = this.transNumber()
        let operador = [10, 9, 8, 7, 6, 5, 4, 3, 2]
        let resto = []
        for(let i= 0; i < operando.length - 2; i++){
            resto.push(operando[i]*operador[i])
        }
        total = resto.reduce((acumulador, value) => acumulador + value,0)
        let cal = 11 - (total % 11)
        if(cal > 9) cal = 0
        if( cal === operando[9]){
            firstValor = []
            operador.unshift(11)
            for(let i= 0; i < operando.length - 1; i++){
                firstValor.push(operando[i]*operador[i])
            }
            console.log(total)
            total = firstValor.reduce((acumulador, value) => acumulador + value, 0)
            if (11 - (total % 11) === operando[10]){
                let result =document.querySelector('.result') 
                result.innerHTML = 'CPF valido!'
            }else{
                alert('CPF invalido!')
            }
        }else{
            alert('CPF invalido!')
        }
        

       
        return total
        
    }


}
document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('validar')){
        const inicializador = new ValidadorDeCPF()
        inicializador.iniciar()
    }
})

 
