const numkm = prompt("Quanti km devi percorrere?")
console.log(numkm)
const età = prompt("Quanti anni hai?")
console.log(età)
const pricebigl = Number(numkm * 0.21)
// SCONTO UNDER 18
const discountunder = Number((pricebigl / 100) * 20)
// PREZZO BIGLIETTO CON SCONTO UNDER 18
const under = Number(pricebigl - discountunder)
// PREZZO BIGLIETTO CON DUE UNITà DECIMALI ALLA FINE
const priceunder = Number(under.toFixed(2))
// SCONTO OVER 65
const discountover = Number((pricebigl / 100) * 40)
// PREZZO BIGLIETTO CON SCONTO OVER 65
const over = Number(pricebigl - discountover)
// PREZZO BIGLIETTO CON DUE UNITà DECIMALI ALLA FINE
const priceover = Number(over.toFixed(2))
