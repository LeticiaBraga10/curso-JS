var agora = new Date()
var hora = agora.getHours()
if (hora < 12){
    console.log(`Bom dia`)
}else if(hora<=18){
    console.log(`Boa tarde`)
}else{
    console.log(`Boa noite`)
}