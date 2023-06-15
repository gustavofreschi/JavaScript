var cadastro = []

cadastro = JSON.parse(localStorage.getItem('bdDados'))
if (cadastro == null) {
    cadastro = []
}
console.log(cadastro)

function Login() {
    var entrar = document.getElementById('log').value

    var senha1 = document.getElementById('password').value


    Validarcadastro(entrar, senha1)



}


function Validarcadastro(login, senha) {

var encontrou = false

    cadastro.forEach(item => {
        if (login == item.log && senha == item.senha) {
            document.getElementById('final').innerHTML = `Bem-vindo, ${item.nome}.`
            encontrou = true
        }

        
    });
    
        if (encontrou == false) {
        alert('Usuário não encontrado!')
        return
    }

}

function ref() {
    location.href = "ex025.html"
}
