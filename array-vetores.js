//Criando um array vazio
var meuVetor = []

//Criando vetores com dados

var numeros = [ 4, 1, 8, 5, 2, 7 ]
var nomes = [ "Silvia", "Marcos", "Sandra" ]
var novoVetor = [ 20, "SESI", true ]

//Acessando os dados de um vetor
console.log( nomes[1] )
console.log( novoVetor[1] )


//Verificando o atributo de tamanho do vetor
console.log(nomes.length)

//Índice        0         1        2         3        4
var frutas = ["Maçã", "Laranja", "Pera", "Morango", "Uva"]

for (var i = 0; i < frutas.length; i++ ) {
    //Coloco o i no indice da frutas para pegar o valor de cada indice do valor
    console.log( frutas[i] )
}


//Adicionando novo valor no final do vetor

frutas.push('Abacaxi')

for (var i = 0; i < frutas.length; i++ ) {
    //Coloco o i no indice da frutas para pegar o valor de cada indice do valor
    console.log( frutas[i] )
}

//O método forEach - significa para cada item do vetor dentro do parenteses colocamos a variável
//que irá receber o conteúdo de cada linha do vetor e com o => { Informamos bloco que irá executar para cada linha }
frutas.forEach( item => {
    console.log('Item pelo forEach', item)
} )


//Quando precisamos do índice também o colocamos entre assim como no exemplo abaixo
frutas.forEach( (item, indice) => {
    console.log('Item pelo forEach', indice, item)
} )

//Para lermos todos os elementos de um vetor, podemos também utilizar o -- for in --
for (var pos in frutas) {
    console.log( frutas[pos] )
}

var novaListaFrutas = []

novaListaFrutas.push('Limão')
novaListaFrutas.push('Melancia')
console.log(novaListaFrutas)

//Modificando o valor de um índice do vetor
novaListaFrutas[0] = 'Melão'
console.log(novaListaFrutas)

