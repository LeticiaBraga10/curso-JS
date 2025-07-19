function calcular(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resp = document.getElementById('resp')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`[ERRO] \u{274C}`)
    }else{
        resp.innerHTML='contando..'
        resp.innerHTML=''
        let i = Number(inicio.value)
        let f= Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Paso impossivel.')
            p=1
        }
        if(i<f){
            resp.innerHTML=''
            for(c=i; c<=f; c+=p){
                resp.innerHTML+=`${c} \u{1FAF5}`
            }
        }else{
            resp.innerHTML=''
            for(c=i; c>=f; c-=p){
                resp.innerHTML+=`${c}`
            }
        }
        resp.innerHTML+=`\u{1F6A9}`
    }
}