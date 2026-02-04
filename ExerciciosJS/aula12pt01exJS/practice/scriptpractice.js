function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 6

 //se quiser forçar para ver a mudança manual
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <12){
    //bom dia!!
    img.src= `imagem/manha.png`
 document.body.style.background = `#d3ad5b`
}else if (hora >= 12 && hora <= 18 ){
    // boa tarde!!
    img.src = `imagem/tarde.png `
 document.body.style.background = `#0c4e6e`
}else {
    // boa noite 
    img.src = `Imagem/noite.png`
    document.body.style.background = `#0c0c0e`
  

}
}
