const read = require ('readline-sync')
    var tur1 = read.question('Que turno voce estuda?(M - Matutino, V - Vespertino ou N - Noturno):')
        switch (tur1){
            case `M`: console.log(`Bom dia!`)
            break
            case `V`: console.log(`Boa tarde!`)
            break
            case `N`: console.log( `Boa noite!`)
            break
        }