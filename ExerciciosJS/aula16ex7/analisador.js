let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number (n) <= 100 ){
        return true
    } else {
        return false
    } 
    
}

function inLista(n,l){
    if (l.indexOf(Number(n)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //vai funcionar para quando adicionar e finalizar ele vai limpar se adicionar denovo ele conta qtos foram adicionados.
    } else {
       window.alert('valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus() // serve para qdo digitar ele mostra depois o cursor piscando e limpa o que foi digitado
}

    function finalizar(){
        if (valores.length == 0){
            window.alert ('adicione valores antes de finalizar ') 
        } else {
            let tot = valores.length
            let maior = valores[0] // neste comando qdo vou analisar se é maior eu verifico sempre pelo primeiro numero adicionado para ver se é maior ou menor 
            let menor = valores[0]
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores [pos]
                if (valores [pos] > maior )
                    maior = valores[pos] 
                if (valores [pos] < menor )
                    menor = valores[pos]     
            }
            media = soma /tot   
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`
            res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
            res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
            res.innerHTML += `<p> Somando todos valores temos ${soma} </p>`
            res.innerHTML += `<p> a media de valores ${media} sera </p>`
        }   
    }
        
            
    
    
    
        
    
    
    
    
       
    
    
    

