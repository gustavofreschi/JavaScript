function calcular() {
    var val1 = document.getElementById("numero").value

    var val2 = document.getElementById("numero2").value

    var valor = Number(val1) + Number(val2)

    var valor2 = Number(val1) - Number(val2)

    var valor3 = Number(val1) * Number(val2)

    var valor4 = Number(val1) / Number(val2)

    var valor5 = Number(val1) % Number(val2)

    var valor6 = Number(val1) ** Number(val2)

    document.getElementById("resultado").innerHTML += `<br> ${val1} + ${val2} = ${valor}
<br> <br> ${val1} - ${val2} = ${valor2}
<br> <br> ${val1} * ${val2} = ${valor3}
<br> <br> ${val1} / ${val2} = ${valor4}
<br> <br> ${val1} % ${val2} = ${valor5}
<br> <br> ${val1} ^ ${val2} = ${valor6} <br>
 `

}

