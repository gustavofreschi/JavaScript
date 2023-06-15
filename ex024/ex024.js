var listaFilmes = []

listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if (listaFilmes == null) {
    listaFilmes = []
}
carregarfilme()

function Movie() {
    
 
    var nomeFilme = document.getElementById('filme').value

    var imagemFilme = document.getElementById('imagens').value

    var possoCadastrar = ValidarCadastro(nomeFilme, imagemFilme)

    if (possoCadastrar == false) {
        alert('Verifique os dados antes de cadastrar!')
       return
    }
    
    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }

    listaFilmes.push(filme)
    //Utilizando o localStorage que irá gravar o nosso vetor de filmes no método setItem
    //preciso passar como parâmetro o nome do espaço que o navegador irá reservar e passo
    //também o vetor de filmes convertido em formato JSON
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )

    carregarfilme()
}


function Indicar() {

        var sorte = parseInt(Math.random() * listaFilmes.length)
        document.getElementById('filmeindicado').innerHTML = 
        `<div>
        <p>${listaFilmes[sorte].nome}</p>
        <img class='poster' src="${listaFilmes[sorte].link}"
        </div>`
}




function Limpar() {
    document.getElementById('final').innerHTML = ""
    document.getElementById('filme').value = ""
    document.getElementById('filme').focus()
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes) )    
}




function ValidarCadastro(filme, imagem) {
    if(filme != "" && imagem != "") {
        return true
    } else {
        return false
    }
}

function carregarfilme() {
    document.getElementById('final').innerHTML = ""

    for (var i in listaFilmes) {
        document.getElementById('final').innerHTML += `<div class="dispflex"><img class ="poster" src="${listaFilmes[i].link}">  <p>${listaFilmes[i].nome}</p></div>`
    }
}
