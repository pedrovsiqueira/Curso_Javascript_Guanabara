let idade = 66;
console.log(`Voce tem ${idade} anos`)
if (idade < 16){
    console.log("Nao vota");
} else if (idade <= 17 || idade > 65){
        console.log("Voto opcional");
    } else {
        console.log("Voto obrigatorio");
}
