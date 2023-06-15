var cadastro = []

cadastro = JSON.parse(localStorage.getItem('bdDados'))
if (cadastro == null) {
    cadastro = []
}
console.log(cadastro)
cadastrarpessoa()

function Cadastrar() {
    var name = document.getElementById('nome').value
    
    var login = document.getElementById('login').value
    
    var password = document.getElementById('senha').value

    var confirmar = document.getElementById('confirm').value

    var validar = ValidarCadastro(name, login, password, confirmar)

    if (validar == false) {
        alert('Verifique os dados antes de cadastrar!')
       return
    } else if (validar == true) {
        alert('Cadastrado com sucesso!')
        location.href = 'ex025-2.html'
    }

    var entrar = {
        nome: name,
        log: login,
        senha: password,
        confirmlog: confirmar
    }

    cadastro.push(entrar)

    localStorage.setItem( 'bdDados', JSON.stringify(cadastro) )
    cadastrarpessoa()

}

function ValidarCadastro(nome, login, senha, confirmar) {
    if(nome != "" && login != "" && senha != "" && confirmar != "") {
        return true
    } else {
        return false
    }
}

function Limpar() {
    document.getElementById('final').innerHTML = ""
    cadastro = []
    localStorage.setItem( 'bdDados', JSON.stringify(cadastro) )    
}


function cadastrarpessoa() {
    document.getElementById('final').innerHTML = ""


    cadastro.forEach((item, indice) => {
        document.getElementById('final').innerHTML += `<div class="flex"><strong>Nome:</strong> ${item.nome} - <strong>Login:</strong> ${item.log} <img class="trash" src="trash2.png" onclick="excluiruser(${indice})"> <br></div>`
    })

}


function excluiruser(indice) {
     cadastro.splice(indice, 1)
     localStorage.setItem( 'bdDados', JSON.stringify(cadastro) )
     cadastrarpessoa()
}