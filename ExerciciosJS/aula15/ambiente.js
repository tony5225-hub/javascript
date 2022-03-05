let num = [5,9,3,6,8] // aqui podemos colocar o numeros dentro do vert

//console.log (` o meu vetor é ${num} `) // se colocar os números sem o template ele coloca os colchetes com os números quando digita f8
num.push(1) // este comando serve para incluir um número no colchete e com sort embaixo ja deixa em ordem 
num.sort() // aqui colocando este num.sort para ordenar os numeros não precisa colocar o console.log
console.log (num)
console.log (` o vetor tem ${num.length} elementos`)
console.log(`o primeiro valor do vetor é  ${num[0]} `)

//este comando busca o valor dentro do vetor e mostra a posição e se pedir um valor que não tem no vetor ele mostra -1  mas podemos colocar if que valor não foi encontrado e else para dizer onde valor esta.  
let pos = num.indexOf(4) 
if (pos == -1){
    console.log ('valor não encontrado')
}else{
    console.log (`o valor 8 esta na posição  ${pos} `)
}

