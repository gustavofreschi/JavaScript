var movies = []

var imgs = []

function Movie() {
    document.getElementById('final').innerHTML = ""
 
    var filmvalue = document.getElementById('filme').value

    var movieimg = document.getElementById('imagens').value

    movies.push(filmvalue)

    imgs.push(movieimg)



    if (filmvalue == "") {
        alert("Digite o nome de um filme")
        return
    }

    
    for (var i in movies) {
    //for (i = 0; i < movies.length; i++) {
        document.getElementById('final').innerHTML += `<div class="dispflex"><img class ="poster" src="${imgs[i]}">  ${movies[i]}</div>`
    }
}


function Indicar() {

        var sorte = parseInt(Math.random() * movies.length)
        document.getElementById('filmeindicado').innerHTML = 
        `<div>
        <p>${movies[sorte]}</p>
        <img src="${imgs[sorte]}"
        </div>`
}




function Limpar() {
    document.getElementById('final').innerHTML = ""
    document.getElementById('filme').value = ""
    document.getElementById('filme').focus()
}

