var movies = []

function Movie() {
    document.getElementById('final').innerHTML = ""
 
    var filmvalue = document.getElementById('filme').value

    movies.push(filmvalue)

    if (filmvalue == "") {
        alert("Digite o nome de um filme")
        return
    }

    

    for (i = 0; i < movies.length; i++) {
        document.getElementById('final').innerHTML += `O filme ${movies[i]} foi adicionado.<br><br>`
    }
}

function Limpar() {
    document.getElementById('final').innerHTML = ""
    document.getElementById('filme').value = ""
}

