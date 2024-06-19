console.log('digite dois números para que seja calculado o mmc')
let numero1
let numero2
let mdc
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
        let mmc = numero2
        while(!(mmc % numero1 == 0 && mmc % numero2 == 0)){
            mmc++;
        }
        for(let i=1; i<=numero1; i++){
            if(numero1%i==0 && numero2%i==0){
                mdc = i;
            }
        }
        console.log("O mmc de " + numero1 + " e " + numero2 + " é " + mmc);
        console.log("O mdc de " + numero1 + " e " + numero2 + " é " + mdc);
        process.exit();
    }
})