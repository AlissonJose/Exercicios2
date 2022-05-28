const read = require ('readline-sync')
    var n1 = parseInt (read.question("Fale um numero: "))
        console.log(n1);
    var n2 = parseInt (read.question("Fale um segundo numero:"))
        console.log(n2);
    var n3 = parseInt (read.question("Fale um terceiro numero:"))
        console.log(n3);
            if(n1&&n2<n3){
            console.log(`Esses numeros ${n1} e ${n2} são menores que o terceiro`)
            } else if (n2&&n3>n1){
            console.log(`Os numeros ${n2} e {n3} são maiores que o primeiro`)
            } else if (n1&&n3>n2){
        console.log(`Os numeros ${n1} e ${n3} são maiores que o ${n2}`)
           
            }