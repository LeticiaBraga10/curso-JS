function carregar(){
var msg=window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML=`Agora são ${hora} horas`
if (hora>=0 && hora<12){
    //'BOM DIA!')
    img.src='manha.png'
    document.body.style.background = '#5D9152'
}else if(hora>=12 && hora <=18){
    //Boa tarde!
    img.src='tarde.png'
    document.body.style.background='#FF6C00'
    document.body.style.color='#331C09'
}else{
    //Boa noite!
    img.src='noite.png'
    document.body.style.background = '#290838'
    document.body.style.color='black'
    
}
}
