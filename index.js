console.log('digite dois números para que seja calculado o mmc')
let numero1
let numero2
process.stdin.on("data", function(data){
    if (!numero1) {
        numero1 = Number(data.toString().trim())
console.log('digite o proximo numero')
    } else if (!numero2) {
        numero2 = Number(data.toString().trim())
        console.log('aperte "ENTER" para obter o resultado')
    }
    else if(numero1 > numero2) {
        let aux = numero1;
        numero1 = numero2;
        numero2 = aux;
        
    } else{
        let i = numero2
        while(!(i % numero1 == 0 && i % numero2 == 0)){
            i++;
        }
        console.log(' o mmc do numero 1 e do numero 2 é ' + i);
    }
})