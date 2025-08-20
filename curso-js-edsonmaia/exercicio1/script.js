let lutador = 'fedor'
let nacionalidade = 'Russo'
let idade = 47
let peso = 100
let altura = 1.90
let imc = peso / (altura **2)
const dados_lutador= document.getElementById('dadosLutador');
dados_lutador.innerHTML = `
<h2>${lutador}</h2>
<p>${nacionalidade}</p> 
<p>${idade}</p> 
<p>${peso}</p>
<p>${altura}</p> 
<p>${imc.toFixed(1)}</p> 
` 

let mesesDoAno = ['Janeiro','Fevereiro','Março']

meses.innerHTML=`
<h1>Array meses do ano</h1>
<h3>${mesesDoAno[0]}, ${mesesDoAno[1]},${mesesDoAno[2]},...</h3>`

let jogo = {
    titulo : 'League Of Legends - LOL',
    desenvolvedor : 'Riot Games',
    anoLancamento : 2009
}

const jogol = document.getElementById('jogo');

jogol.innerHTML=`${titulo}`