function verify() {
 var nome = document.getElementById("nome").value

 var idade = document.getElementById("idade").value

 if (nome == "") {
    alert("Digite seu nome!")
    return
 }

 if (idade == "") {
    alert("Digite sua idade!")
    return
 }


    if (idade >= 18) {
        document.getElementById("final").innerHTML = `Parabéns, ${nome}, você pode tirar CNH <br> <img src="Drive-License-americana.jpg.optimal.jpg">`

        document.getElementById("final").style.color = "green"
    } else {
        document.getElementById("final").innerHTML = `Que pena, ${nome}, você não pode tirar CNH <br> <img src="Group1.png"> `

        document.getElementById("final").style.color = "red"
    }
}