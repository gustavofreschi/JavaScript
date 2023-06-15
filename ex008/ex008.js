function media() {
    var name = document.getElementById("aluno").value

    var nota1 = document.getElementById("nota1").value

    var nota2 = document.getElementById("nota2").value

    if (name == "") {
        alert("Digite seu nome")
        return
    }

    if (nota1 == "") {
        alert("Digite uma nota primeiro")
        return
    }

    if (nota2 == "") {
        alert("Digite a segunda nota")
        return
    }
    
    
    if (nota1 > 10) {
        alert("Nota 1 não pode ser maior que 10")
        return
    }

    if (nota2 > 10) {
        alert("Nota 2 não pode ser maior que 10")
        return
    }

    
    var media = (Number(nota1) + Number(nota2)) / 2
    
    document.getElementById("final").innerHTML = `O aluno ${name} tirou nota ${nota1} e ${nota2}, sua média foi ${media}`

  
    
    if (media >= 7) {

    document.getElementById("final2").innerHTML = `<strong> APROVADO </strong>`

    document.getElementById("final2").style.color = "green"
    
    } else {
    document.getElementById("final2").innerHTML = `<strong> REPROVADO </strong>`

    document.getElementById("final2").style.color = "red"
    }

    
}