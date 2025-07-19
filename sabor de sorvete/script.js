function verificar(){
    var sabor = document.getElementById('txtsab')
    var img = document.createElement('img')
    var resp = document.querySelector('div#resp')
    var section = document.querySelector('section')
    var botao = document.querySelector('button')
    //const canvas = document.getElementById('meuDesenho');
    //const ctx = canvas.getContext('2d');

    if(sabor.value == 'chocolate'){
        img.setAttribute('src','sorvetechocolate.png')
        document.body.style.background='#421E00'
        document.body.style.color='brown'
        section.style.background='#8F7745'
    }else if(sabor.value=='baunilha'){
        img.setAttribute('src','sorvetebaunilha.png')
        document.body.style.background='#e5db84'
        section.style.background='#ffeeac'
    }else if(sabor.value == 'morango'){
        img.setAttribute('src','sorvetemorango.png')
        document.body.style.background = '#e05576'
        section.style.background='#fdd1b6'
    }else if(sabor.value == 'açai'){
        img.setAttribute('src','açai.png')
        document.body.style.background='#3A083E'
        section.style.background='#FFFFFF'
     
    }else{
        resp.innerHTML=`<p style="color: red;">Sabor não disponível!</p>`;
        document.body.style.background='#FF0004'
        section.style.background='#FFFFFF'
    return; // ⬅️ Aqui ele para a função imediatamente
}
    resp.innerHTML=(`você escolheu: <strong>${sabor.value}</strong>`)
    resp.appendChild(img)
    resp.style.textAlign = 'center';
}