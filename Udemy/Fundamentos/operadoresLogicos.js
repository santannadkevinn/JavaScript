function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //cons comprarTv32 = !!(trabalho1 ^ trabalho2) bitwiser xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaldavel = !comprarSorvete  // operador unario
    return{comprarSorvete, comprarTv50, comprarTv32, manterSaldavel}
}
console.log(compras(true, true))
console.log(compras(true, false))