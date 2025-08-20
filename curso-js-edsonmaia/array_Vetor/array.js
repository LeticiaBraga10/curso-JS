//Arquivo js - Aula array

let produtos = ['Arroz','Feijão','Frango']
var codigo = Array(10,20,30)
let meses = ['jan','feb','Mar','Abr']
let pala = Array(10)
pala[0] = 'olá,mundo!'
pala[1] = 'Leca Braga'
pala[10] = 'vamos conseguir!'
meses[0] = 'janeiro'
meses[6] = 'Meu aniversário'
console.log(meses[0])
console.log(meses)
//console.log(pala.length)


//Adicionar no final  push = empurre

produtos.push('Açucar','café')
codigo.push(12,89,34)
meses.push('Mai','Jun','Jul','Ago')
//codigo.sort((a,b) => a-b)
//console.log(`Ao todo, temos ${codigo.length} termos.`)

// REMOVER do final(o último elemento): pop = estourar
produtos.pop()
meses.pop()
produtos.pop()

//ADICIONAR  no inicio; unshift
produtos.unshift('uva','maçã')

//REMOVER do inicio: shift
produtos.shift('uva')
//REMOVER de uma posiçãoespecifíca; splice = emendar
//(posição inicial, qaunatos serão removidos)
codigo.splice(0,3) // 0 é a pos. inicial dos que serão removidos. 3 é a quantidade 

//COPIAR ARRAY: slice = fatiar porção
//(posição inicial, qaunatos serão copiados)
let meses1 = meses.slice()
let meses2 = meses.slice(0,4)

//spread operator: [...]  serve para copiar o conteúdo do array, e ainda dá para adcionar mais coisas.
let teste =  [...produtos,'ovo','goiaba','macarrão']
