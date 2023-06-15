//O alert é utilizado para exibir uma mensagem em popup//
//alert("Olá mundo")


/* Comentários
   em múltiplas
   linhas

*/

// Comentário em uma linha //


//Tipo de exibição de mensagens no console
console.log("Olá mundo, estou utilizando o console")

console.error("Esta é uma mensagem de erro")


console.warn("Esta é uma mensagem de aviso")


console.info("Esta é uma mensagem de informação")




//Criando uma função chamada quando clicamos no botão
function Botao1() {
   alert("Você clicou no botão")
   
}

function BotaoCorFundo() {
   document.body.style.backgroundColor = "green"
}

function BotaoNome() {
    //prompt abre opção para digitar algo
   var nome2 = prompt("Qual é o seu nome?")
   confirm ("Olá " + nome2 + ", entendeu variável?")

   confirm (`Olá ${nome2}, entendeu variável?`)
}



// Declarando variáveis / Tipo string = texto (com aspas)
var nome = "Gustavo"

var sobrenome = "Freschi Madureira"

// Tipo number = número (sem aspas)
var idade = 16


// Boolean = true or false
var aprovado = true


// Utilizamos o typeof para saber o tipo do dado (var)
console.log (typeof nome)


// Juntando strings com o +
console.log (nome + ` ` + sobrenome)

var n1 = 10

var n2 = 15

// Irá somar as 2 vaiaveis number (25)
console.log(n1 + n2)


var n3 = "10"

var n4 = "15"

//Irá juntar as 2 variaveis ("1015")
console.log(n3 + n4)
//Se utilizarmos o + com string ele se junta



//Uma variavel pode receber o valor de outra variavel n1 = n2
console.log ("n1 = " + n1 + ' e o n2 = ' + n2)

console.log (`n1 = ${n1} e o n2 = ${n2}`)



var salario = 1290.85

//Posso somar a variavel com ela mesma
salario = salario + 200

console.log(salario)


console.log("Olá, " + nome + " você tem " + idade + " anos")

console.log(`Olá, ${nome} você tem ${idade} anos`)


function BotaoSomar() {
   var nr1 = prompt("Digite um número:")
   
   var nr2 = prompt("Digite outro número:")

   
   //Convertendo a variavel valor 1 e 2 de string para number
   nr1 = parseFloat(nr1)

   nr2 = Number(nr2)

   


   var soma = nr1 + nr2
  
   // alert(soma) 

   
   /* Alterando um elemento buscando ele pelo ID e alterando o conteúdo do HTML, podemos ler da seguinte forma
   , no documento pegar o elemento pelo ID resultado e alterar o conteúdo do HTML pela string */
   document.getElementById("resultado").innerHTML += `<br> <br> A soma de ${nr1} + ${nr2} é igual a ${soma}`
}


function BotaoCidade() {
    var city = document.getElementById("cidade").value

    document.getElementById("resultadoCidade").innerHTML += `<br> <br> O nome da cidade: ${city}` 
}

//Operadores aritméticos e ordem de precedência

var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma) // 7


var opSubtracao = 5 - 2 //Operador de subtração -
console.log(opSubtracao) // 3


var opMultiplicacao = 5 * 2 //Operador de multiplicação *
console.log(opMultiplicacao) // 10


var opDivisao = 5 / 2 //Operador de divisão /
console.log(opDivisao) // 2.5


var opExponenciacao = 5 ** 2 //Operador de exponenciação **
console.log(opExponenciacao) // 25


var opResto = 5 % 2 //Operador de resto de divisão %
console.log(opResto) // 1

//Ordem de precedência

var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) // 6.5

var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) // 4

/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
*/

//Constantes - o valor não pode ser alterado depois de atribuído
const pi = 3.14
//pi = 3 - Se o valor for alterado dará erro no javascript


var number1 = 5

var number2 = 6

console.log(n1 > n2) // > Maior que

console.log(n1 < n2) // < Menor que

console.log(n1 >= n2) // >= Maior ou igual que

console.log(n1 <= n2) // <= Menor ou igual que

console.log(n1 == n2) // == Igual

console.log(n1 != n2) // != Não igual - Diferente


//Estruturas condicionais

if (number1 > number2) {       //Verificando a condição entre parenteses
   // Se a condição for verdadeira "entra" nesse bloco
   console.log("O number1 é maior que o number2")

} else {
   // Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
   console.log("O number1 é menor que o number2")
}

var minhaIdade = 18

if (minhaIdade >= 16){
    console.log("Você pode votar")
} else {
    console.log("Você não pode votar")
}

var caneta1 = "vermelha"

var caneta2 = "azul"

if (caneta1 == "vermelha" && caneta2 == "azul") {
   //feliz
} else {
   //triste
}

//Estruturas condicionais encadeadas

var media = 10

if (media >= 7) {
   console.log("APROVADO")
} else if(media >= 5) { 
   console.log("RECUPERAÇÃO")
} else {
   console.log("REPROVADO")
}

if (media == 10) {
   console.log("Ótimo aluno")
} else if (media == 9 || media == 8) {
   console.log("Bom aluno")
} else if (media == 7 || media == 6) {
   console.log("Aluno mediano")
} else if (media == 5 || media == 4 || media == 3) {
   console.log("Aluno abaixo da média")
} else {
   console.log("Aluno ruim")
}

//Operador OU = ||



//Math.random()
//Math.random retorna um número decimal e precisamos multiplicar pelo nr
//Máximo que desejamos
//O parseInt utilizamos para obter apenas a parte inteira do número
var nrSorteado = parseInt(Math.random() * 100)
console.log(nrSorteado)

//Switch case
//É como se fosse vários if else de forma mais simples

var diaSemana = 3

switch (diaSemana) {
   case 1:
      console.log("Hoje é: Domingo")
      break
   case 2:
      console.log("Hoje é: Segunda")
      break
   case 3:
      console.log("Hoje é: Terça")
      break
   case 4:
      console.log("Hoje é: Quarta")
      break
   case 5:
      console.log("Hoje é: Quinta")
      break
   case 6:
      console.log("Hoje é: Sexta")
      break
   case 7:
      console.log("Hoje é: Sábado")
      break
   default:
      console.log("Dia inválido")



}

//for - Laço de repetição
//Primeira expressão var i = 1
//(Aqui eu inicio o controle de vezes)
//Segunda expressão i <= 10
//(Aqui nós verificamos a condição para se manter no loop)
//Terceira expressão i++
//(Aqui acrescentamos na variável +1 vez)
for (var i = 1; i <= 10; i++) {
    console.log(i)
}


//Verificando se número é par com while
var contador = 1 //Iniciando o contador de vezes que irá executar
while (contador <= 10) { //Enquanto a condição for verdadeira
   if (contador % 2 == 0) { //Condição para o contador for par
      console.log(`${contador} é par`)
   } else {
      console.log(`${contador} é ímpar`)
   }
   contador++
}


var cont = 1

while (cont <= 5) {
   console.log(cont)
   cont++
}

for (var cont = 1; cont <= 5; cont++ ) {
   console.log(cont)
}