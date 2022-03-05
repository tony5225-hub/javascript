function carregar () { // para colocar este carregar no HTML vai no body e coloca onload e se aparecer algum erro digitar f8 para mostrar erro
    var msg = window.document.getElementById ('msg')// aqui foi criado objeto que vai aparecer a mensagem que o id é MSG e function emcima para funcionar no navegador
var img = window.document.getElementById ('imagem')
var data = new Date()
var hora = data.getHours() //data atualizada pelo sistema
//var hora = 19 //se quiser forçar para ver a mudança manual

msg.innerHTML = `Agora são ${hora} horas` // para colocar essa crase ` ` fora do parenteses digita shit a crase e depois espaço. 
if (hora >=0 &&  hora < 12){
    //  'Bom Dia'
    img.src = `
    imagem/manha.png`
    document.body.style.background =`#d3ad5b`
}else if (hora >= 12 && hora <=18 ){
    // 'Boa Tarde'
    img.src = `
    imagem/tarde.png`
    document.body.style.background = `#0c4e6e`
}else{
    // 'Boa Noite'
    img.src = `
    imagem/noite.png`
    document.body.style.background = `#0c0c0e`
}
}
