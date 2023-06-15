function MediaFeita() {
  var nota1 = parseInt(document.getElementById('nota1').value)
  var nota2 = parseInt(document.getElementById('nota2').value)
  var nome = document.getElementById('aluno').value
  var media = Media(nota1, nota2)
  var aprovado = approved(media)

  if (nome == "") {
    alert('Digite seu nome!')
    return
  }

  if (nota1 > 10 || nota2 > 10) {
    alert('Nota não pode ser maior que 10!')
    return
  }

  document.getElementById('final').innerHTML = `${nome}, sua nota é ${media}`

  if (aprovado == true) {
    document.getElementById('final2').innerHTML = `Você foi aprovado!`
  } else {
    document.getElementById('final2').innerHTML = `Você foi reprovado!`
  }

}


function Media(nota1, nota2) {
    var media = (nota1 + nota2) / 2
    return media
} 

function approved(aprovado) {
    if (aprovado >= 7) {
       return true
    } else {
       return false
    }
}