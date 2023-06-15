//Declarando uma função sem parâmetro e sem retorno
function exibirinformacao() {
    console.log('Executei a função exibir info')
}


//Chamando a minha função
exibirinformacao()



//Função com entrada de parâmetro e sem retorno (sem saída de dados)
//Criando a função para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr) {
    for (var i = 0; i <= 20; i++) {
        console.log(`${nr} x ${i} = ${nr * i}`)
    }
}

//Chamando a função e passando o nr com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(2)


//Declarando a função recebendo o parametro e retornando um valor
function ricardoCalculeDobro(nr) {
    var dobro = nr * 2
    return dobro
}


//Chamando a função para calcular o dobro e receber o resultado na variavel
var resultado = ricardoCalculeDobro(7)

console.log(resultado)


//Realizar soma
function soma(n1, n2) {
   var soma = n1 + n2
   return soma
}

var n1 = 2
var n2 = 3

var calculoSoma = soma(n1, n2)

console.log(calculoSoma)

//Calcular média enviando 2 parametros e retornando a media

function media(nota1, nota2) {
   var soma = nota1 + nota2
   var media = soma / 2
   return media
}

var aluno1 = media(8, 9)
console.log(aluno1)

var aluno2 = media(7, 6)
console.log(aluno2)


var user = "adm"
var password = 1234

var acesso = validarLogin(user, password)
if (acesso == true) {
   console.log('você pode acessar o sistema')
} else {
    console.log('você não pode acessar o sistema')
}

function validarLogin(user, password) {
    if(user == "" || password == "") {
        return false
    }
     else if (user == "adm" && password == "1234") {
        return true
    } else {
        return false
    }
}