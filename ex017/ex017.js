function Impar() {
var numinicio = document.getElementById('inicial').value
var numfinal = document.getElementById('fim').value


    for (var i = numinicio; i <= numfinal; i++) {
        if (i % 2 != 0) {
            document.getElementById('final').innerHTML += `${i} <br>`
        }
    }
}

function Limpar() {
    document.getElementById('final').innerHTML = ''
}