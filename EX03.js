const read = require("readline-sync")
    var n = parseFloat (read.question(" Digite um valor:" ))
        if (n >= 0){
            console.log(`O valor ${n} é positivo` )
        } else {
            console.log(`O valor ${n} é negativo`)
            
    }