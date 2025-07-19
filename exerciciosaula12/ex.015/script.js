function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value > ano)){
        window.alert(`Verifique os dados e tente novamente!`)
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src','menino.png')
                document.body.style.background='blue'
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','homemjovem.png')
                document.body.style.background='#0B9400'
            }else if(idade < 40){
                //adulto
                img.setAttribute('src','homemadulto.png')
                document.body.style.background='#253A70'
            }else if(idade >= 40 && idade < 65){
                //senior
                img.setAttribute('src','homem40anos.png')
                document.body.style.background='#9E7D37'
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade>=0 && idade < 10){
                //criança
                img.setAttribute('src','menina.png')
                document.body.style.background='#FF14EF'
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','mulherjovem.png')
                document.body.style.background='#BD2636'
            }else if(idade < 40){
                //adulto
                img.setAttribute('src','mulheradulta.png')
                document.body.style.background='#542969'
            }else if(idade>=40 && idade < 65){
                //idoso
                img.setAttribute('src','mulher40anos.png')
                document.body.style.background='#FF7336'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)   
}
}