const read = require("readline-sync")
    var n = parseFloat(read.question("Diga um número:") )
        if (n >= 20 && n <=90){
            console.log('O numero informando está entre 20 e 90')
            } else {
                console.log ('O numero informado não está entre 20 e 90')
            }