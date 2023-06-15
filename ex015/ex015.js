function Tabuada() {
    var num = document.getElementById('number').value

    if (num == "") {
        alert('Digite um número!')
        return
    }

    Limpar()

    var multi = 1

    while(multi <= 10) {
    
    document.getElementById('final').innerHTML += `${num} X ${multi} = ${num*multi} <br>`
    multi++

}
}

function Limpar() {
    document.getElementById('final').innerHTML = ''
}