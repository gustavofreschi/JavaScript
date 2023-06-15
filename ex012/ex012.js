var sorte = parseInt(Math.random() * 100)

var tentativas = 0

function chute() {
    var num = prompt("Digite um número")

    tentativas ++

    if (num < sorte) {
        document.getElementById("final").innerHTML += `Você chutou ${num}, eu pensei em um número MAIOR <br>` 
    } else if (num > sorte) {
        document.getElementById("final").innerHTML += `Você chutou ${num}, eu pensei em um número MENOR <br>`
    } else if (num == sorte) {
        document.getElementById("final").innerHTML += `<strong> PARABÉNS VOCÊ ACERTOU O Nº ${sorte} em ${tentativas} tentativas`
    }
}

function gamenew() {
    document.getElementById("final").innerHTML = ""
    sorte = parseInt(Math.random() * 100)
    tentativas = 0
}