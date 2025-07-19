function enter(){
    let nota1 = document.getElementById('txtn1')
    let nota2 = document.getElementById('txtn2')
    let resp = document.getElementById('resp')
    if(nota1.value.length == 0 || nota2.value.length == 0 ){
        window.alert(`[ERRO] Preencha os espaços em branco.`)
    }else{
        let n1 = Number(nota1.value)
        let n2 = Number(nota2.value)
        if(n1>10 || n2>10){
            resp.innerHTML=(`[ERRO] A nota máxima é 10, verifique os dados e tente novamente.`)
            resp.style.color='red'
            resturn
        }
        if(n1<0 || n2<0){
            resp.innerHTML=(`[Erro] verifique os dados e tente novamente.`)
        }else{
            let c =  (n1+n2)/2
            if(c>7){
                resp.innerHTML=(`Situação: Aprovado! <br> Nota: ${c}`)
                resp.style.background='#315499'
                resp.style.color='black'
            }else if(c<=7 && c>=5){
                resp.innerHTML=(`Situação: Recuperação! <br> Nota: ${c}`)
                resp.style.background='#EBBD20'
                resp.style.color='black'
            }else if(c<5 && c >=0){
                resp.innerHTML=(`Situação: Reprovado! <br> Nota: ${c}`)
                resp.style.background='#EB3324'
                resp.style.color='black'
            }
        }
    }
}