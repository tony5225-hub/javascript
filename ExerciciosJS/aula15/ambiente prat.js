let num = [5,8,2,9,3]
num.sort()
num.push(1)
console.log (`O vetor é ${num}`)
console.log (`O vetor tem ${num.length} posições`)
console.log (`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`o Valor não foi encontrado`)
} else{
    console.log(`o valor 8 esta na posição ${pos}`)
}



