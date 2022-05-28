const read = require ('readline-sync')
    var city = read.question("Fale a sua cidade:")
console.log(city)
    var gasoline = parseFloat(read.question(`Qual o preco da gasolina em ${city} ? `))
console.log(gasoline)
console.log(`O preco da gasolina em ${city} é de: R${gasoline}`)
    var alchool = parseFloat(read.question(`Qual o preco do alcool em ${city} ? `))
console.log(alchool)
console.log(`O preco do Alcool em ${city} é de: R$ ${alchool} `)
    if (alchool < 0.7*gasoline){
console.log(` Na cidade do ${city} o valor do alcool corresponde a 70% do valor da gasolina. Então compensa abastecer com alcool. `)
    }else {
console.log(` Na cidade do ${city} o valor do alcool corresponde a 70% do valor da gasolina. Então nao compensa abastecer com alcool.`) 
}