function tratarErrorELanĂ§ar(erro) {
    throw new Error('10')
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e) {
        tratarErrorELanĂ§ar(e)
    }  finally{
        console.log('Final')
    }
   
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)