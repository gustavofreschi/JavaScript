function calculo() {
    var nr = document.getElementById("numero").value

    var nr2 = nr * 2

    var nr3 = nr / 2

    document.getElementById("result").innerHTML += `<br>O dobro do número ${nr} é ${nr2} e sua metade é ${nr3}`


    
    /* Também pode ser usado: 
    document.getElementById("result").innerHTML += `<br>O dobro do número ${nr} é ${nr * 2} e sua metade é ${nr / 2}` */


}

function BotaoLimpar() {
    document.getElementById("result") .innerHTML = ""
    document.getElementById("numero").value = ""
}