function login() {
var user = document.getElementById("user").value
    
var senha = document.getElementById("senha").value

    if (user == "") {
        alert("Digite seu usuário!")
        return
    }
    
    if (senha == "") {
        alert("Digite sua senha!")
        return
    }



    if (user == "adm" && senha == "1234") {
        document.getElementById("final").innerHTML = `Seja bem vindo, ${user}.`

        document.getElementById("final").style.color = "green"
    } else {
        document.getElementById("final").innerHTML = "Usuário ou senha incorretos!"

        document.getElementById("final").style.color = "red"
    }
}