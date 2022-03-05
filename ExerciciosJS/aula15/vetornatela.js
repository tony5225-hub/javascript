let valores =[8,1,7,4,2,9]
valores.sort()

// aqui mostra o vetor sem muita formatação console.log(valores)

/* aqui mostra com vetores abaixo 
console.log (valores[0])
console.log (valores[1])
console.log (valores[2])
console.log (valores[3])
console.log (valores[4])
console.log (valores[5])
 
 aqui mostra com comando pode ser feito
for(let pos = 0; pos < valores.length; pos++){
    console.log (`a posição ${pos} tem valor ${valores[pos]}`)
}
*/
// e aqui vamos mostrar de modo mais simplificado o comando acima.

for (let pos in valores){
    console.log(`a posição ${pos} tem valor ${valores[pos]}`)
}
// esta sintaxe só funciona para array e objetos.