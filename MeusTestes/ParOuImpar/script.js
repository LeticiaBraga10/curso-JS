function enter(){
    let num = document.getElementById('txtn')
    let resp = document.getElementById('resp')
    if(num.value.length == 0){
        window.alert('[ERRO] Preencha o campo de dados.')
        return
    }else{
        let n = Number(num.value)
        /*if(isNaN(n)){
            resp.innerHTML='okokokoko'
            return
        }*/
        if (!Number.isInteger(n)) {
            window.alert('[ERRO] Digite apenas números inteiros!')
            resp.innerHTML=`[ ERRO ]`
            resp.style.color='red'
            return
        }
        if(n % 2 == 0){
            resp.innerHTML=`${n} é par`
            resp.style.background='white'
        }else{
            resp.innerHTML=`${n} é ímpar`
            resp.style.background='white'
        }
    }
}
