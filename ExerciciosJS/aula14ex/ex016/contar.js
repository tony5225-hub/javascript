function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById ('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar'
        //window.alert ('[Erro] faltam dados')
    }else{
       res.innerHTML = 'contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number (passo.value)
       if (p<=0){
           window.alert ('Passo iválido! considerando passo 1')
           p = 1
       }
        if (i<f){ // contagem crescente
            for (let c = i; c <= f;c += p){
                res.innerHTML += `${c} \u{1F449} `// aqui basta copiar o códifgo emoji e colocar \ {1F449}.... mas só funciona entre crases `` e buscar no site de emoji copiado. ir neste site: https://unicode.org/emoji/charts/full-emoji-list.html#1f60a
            }
            
        }else {
            for (let c = i; c >= f;c -= p){ // contagem decrescente
                res.innerHTML += `${c} \u{1f449}`
            } 
        }
        res.innerHTML += `\u{1F3c1}`  
    }
        
}