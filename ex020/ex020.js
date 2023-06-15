function Filmes() {
    var filmes = ["Interestelar", "Star Wars", "Harry Potter", "Super Mario Bros", "Vingadores", "Barbie"]
    
    Limpar()
    for (i = 0; i < filmes.length; i++) {
        document.getElementById('final').innerHTML += `Posição no vetor ${i} - Filme ${filmes[i]} <br> <br>`
    }
}

function Limpar() {
    document.getElementById('final').innerHTML = ``
}