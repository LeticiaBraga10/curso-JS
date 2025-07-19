// CRIAR OBJETOS 
// obs: no ex abaixo, pessoas é o objeto, e idade, peso e etc.. são atributos
let pessoas = {
    nome : ['Leticia'],
    //nome : 'Leticia Nunes' -> no caso de usar 'const' no lugar de 'let', isso não pode ser feito, pq não dá para fazer mudança de variável.
    idade : [23],
    //idade : 23
    peso : 70.0,
    altura : 1.65,
    doador : false,
    
}

let produtos = {
    descricao : [], // um array de descrição
    //descrição : "" na forma de texto
    //descrição : 0.0 para indicar um número
    preco:[],
}
//obs: sempre use as virgulas para separar os atributos.

const carros ={
    marca : ['ford','fiat','GM'],
    modelo : ['ka','uno','corsa'],
    ano : [1999,2005,2010]
}

/*PARA ACESSAR PROPRIEDADE: 
1º objeto.atributo(/propiedade)
    pessoa.altura

2º objeto['atributo'](/propiedade)
    pessoa['altura']
*/

//OPERAÇÃO IMC = peso /(altura*altura)
//let imc = pessoas.peso/(pessoas.altura**2)

// to.fixed(x) -> para limitar o nº de casas decimais.
//console.log("IMC:" + imc.toFixed(2))

/*PARA ATUALIZAR O VALOR DE PROPRIEDADE (NESSE CASO, ELE FAZ UMA SUBSTITUÍÇÃO).
pessoas.nome='Leca'
produtos.descricao='peixe'*/


/*PARA ADICIONAR MAIS PROPRIEDADES, USEO SPREED OPERATOR:
produtos.descricao = [...produtos.descricao,'uva','carne']
pessoas.nome = [...pessoas.nome,'braga','lequinha']
pessoas.idade = [pessoas.idade,12,122,66] 
-> Isso só funciona se eu usar array no atributo.
*/

//USANDO SPREED OPERATOR EM OBJRTOS CONST.
carros.marca = [...carros.marca,'wv']
carros.modelo = [...carros.modelo,'fusca']
carros.ano = [...carros.ano,'1979'] 
//obs: dá para atribuir novos valores, por causa do Array.
console.log(carros.ano)
