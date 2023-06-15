function Tabuada() {
    var num = document.getElementById('number').value

    if (num == "") {
        alert('Digite um número!')
        return
    }

    Limpar()

    for (var multi = 1; multi <= 10; multi++) {
        document.getElementById('final').innerHTML += `${num} X ${multi} = ${num*multi} <br>`
    }
}


function Limpar() {
    document.getElementById('final').innerHTML = ''
}