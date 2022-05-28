const read = require ('readline-sync')
var Camisa = read.question("Fale o tamanho da blusa: ")
console.log(Camisa)
    if (Camisa==('P')){
console.log("Voce escolheu o tamanho: ('P')")
    } else if ( Camisa==("M")){
console.log("Voce escolheu o tamanho: ('M')")
    } else if (Camisa==("G")){
console.log("Voce escolheu o tamanho: ('G')")  
    } else {
console.log("Esse tamanho não existe.")
    }