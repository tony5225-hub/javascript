/*
 criar uma função RECURSIVA
 o fatorial de 5! = 5x4x3x2x1 mas pode ser representado por 
 5!= 5x4! ou seja 5 fatorial vezes 4! que a sequencia de 5! ou representado por n abaixo

n! = n x (n-1)!
e se for de 1 será 1! = 1
*/

function fatorial (n){
    if (n == 1 ){
        return 1
    } else {
        return n * fatorial (n-1)
    }

}
    console.log (fatorial(1))





