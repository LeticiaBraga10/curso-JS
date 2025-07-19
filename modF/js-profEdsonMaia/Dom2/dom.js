let titulo = document.querySelector('h1')
titulo.innerHTML='Aula de dom'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src','fundo.png')
imagem.setAttribute('width','400px')

titulo.style.color='red';
titulo.style.backgroundColor='#213';
titulo.style.borderBottom ='5px solid yellow';
titulo.style.padding='0.625rem';
titulo.style.borderRadius = '5px';

let box = document.querySelectorAll('.box')
box[0].setAttribute('class','escura')
box[0].removeAttribute('class')

let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click',modoDark)
btnLight.addEventListener('click',modoLight)

function modoDark(){
    tela.classList.add('dark');
    tela.classList.remove('light');
}

function  modoLight(){
    leta.classList.remove('dark')
    tela.classList.add('light')
}
titulo.addEventListener('click', mudarId)
function mudarId(){
    titulo.id = 'titulo'
}