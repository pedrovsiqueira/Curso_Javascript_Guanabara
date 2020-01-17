let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num [5] = 6
console.log(`Nosso vetor é o ${num}`)
num.push(7)
console.log(`Nosso vetor é o ${num}`)
console.log(num.length)
num.sort()
console.log(`Nosso vetor é o ${num}`)
let pos = num.indexOf(10)
if(pos == -1) {
    console.log('O Valor não foi encontrado')
} else {
console.log(pos)
}

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(num[pos])
}
*/

//.push adicionar elemento ao final do array
//num.length pegar o tamanho do array.
//num.sort() ordenar vetor
//for para exibir array sem formatação
//for( in ) para cada posição em num
//.indexOf(7)buscar valores em um vetor


