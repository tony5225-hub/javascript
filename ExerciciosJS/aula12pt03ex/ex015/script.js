function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else{
      var fsex = document.getElementsByName('radsex') /* aqui foi colocado radsex pois se colocar nomes diferentes no html quando ele seleciona no site masc e fem ele separa senão o fleg de marcação tipo ponto fica marcado nos dois*/
      var idade = ano - Number(fano.value) 
      var genero = ''
      var img = document.createElement('img') // colocando img na mão como se fosse manual no html ( dinamico)
      img.setAttribute('id','foto') 
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >=0 && idade <10){
          // criança
          img.setAttribute ('src','foto-bebe-m.png')
        }else if ( idade <21){
          // jovem
          img.setAttribute ('src','foto-jovem-m.png')
        }else if (idade <50){
          //adulto
          img.setAttribute ('src','foto-adulto-m.png')
        }else {
          //idoso
          img.setAttribute ('src','foto-idoso-m.png')
        }
     }else if (fsex [1].checked){
       genero = 'Mulher'
       if (idade >=0 && idade <10){
        // criança
        img.setAttribute ('src','foto-bebe-f.png')
      }else if ( idade <21){
        // jovem
        img.setAttribute ('src', 'foto-jovem-f.png')
      }else if (idade <50){
        //adulto
        img.setAttribute ('src','foto-adulto-f.png')
      }else {
        //idoso
        img.setAttribute('src','foto-idoso-f.png')
      }
     }
     res.style.textAlign = 'center' /* colocando alinhamento aqui no Js que pode ser feito no CSS tbem */
     res.innerHTML = `Detectamos ${genero} com ${idade} anos `
     res.appendChild(img)
    }
}