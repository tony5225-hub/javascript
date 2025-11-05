var idade = 67
console.log (`voce tem ${idade} anos` )
if  (idade <16 ){ // lógica if conforme idade digitada na variavel a idade será representado votar e não votar 
    console.log('não vota ') 
} else if (idade <18 || idade > 65) { // aqui mostra se for <18 e o || idade >65 o voto será opcional
    console.log('voto opcional')
}else { // >18 o voto é obrigatório
    console.log('voto obrigatório')
}    


   


   
// OBS PORÉM COM 16 ANOS VC VOTARIA AQUI NO BRASIL E A LÓGICA ESTARIA ERRADA.