const read = require ('readline-sync')
    var n1 = parseFloat(read.question("Me fale um numero inteiro:"))
console.log(n1)
    if (n1 % 2==0){
console.log(`O numero ${n1} e: [PAR]`)
    }else{
console.log(`o numero ${n1} e: [IMPAR]`)
    }