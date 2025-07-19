function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        window.alert('[ERRO]')
    }else{
        let n = Number(num.value)
        tab.innerHTML=''
        let c = 1
        while(c<=10){
            let item = document.createElement('option')
            item.text=(`${c} x ${n} = ${c*n}`)
            tab.appendChild(item)
            c++
            tab.style.background='black'
            tab.style.color='orange'
            item.style.background='green'
        }
    }
}