let titulo = document.querySelector('h1')
titulo.innerHTML='Aula de funções'

let box = document.querySelector('box')

/*Funções sem parâmetros e sem retorno (procedure)*/

function olaMundo(){
    document.writeln('Olá,mundo! sem retorno <br><br>')
}
/*Para chamar a função = (executar ela)*/ 
olaMundo()


/*Funções com parâmetros e com retorno (function)*/
function olaMundo2(){
    return 'Olá,mundo! com retono'+"<br><br>"
}

/*Para chamar a função = (executar ela)*/

document.writeln(olaMundo2())


let x = 2 
let y = 8
let z = x*y

function somar(n1,n2){
    document.writeln((n1 + n2) + "<br>")
}

somar(x,y)

somar(12,9)

function somar2(c,d){
    return c + d
}

document.writeln(`<p>${somar2(x,y)}</p>`)
document.writeln(`<p>${somar2(2,6)}</p>`)

/*função anônima = não tem nome; 
pode ou não ter parâmetros; 
pode ou não terretorno. */

/*Em JavaScript, funções anônimas são úteis em várias situações, principalmente quando você precisa de uma função temporária ou que não será reutilizada*/  
titulo.addEventListener('click',function(){
    console.log('clicou no título')
    
})

/*Arrow functions (funções de seta) são uma sintaxe mais curta para escrever funções em JavaScript*/


// Não precisa de return. Se for executar 1 ação, as chaves {} não sãoobrigatórias, se for usar 2 ou mais, o uso é obrigatório.

const olaMundoArrow = () => document.writeln('Olá,mundooooooooooooooooo')

olaMundoArrow()

const olaMundoArrow2 = () => '<br><br> OIOIOIOIOIIOIIOOO'

// olaMundoArrow2()
document.writeln(olaMundoArrow2())