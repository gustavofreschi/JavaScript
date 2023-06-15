function imagem() {
    var coracoes = document.getElementById('inicio').value

    for (i = 1; i <= coracoes; i++) {
        document.getElementById('final').innerHTML += `<img class = "coracao" src="heart.webp">`
    }
}


function Limpar() {
    document.getElementById('final').innerHTML = ``
}