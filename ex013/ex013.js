function casar() {
    var nome = document.getElementById("nome").value

    var mes = parseInt(Math.random() * 12)

    var casa = mes

    switch (casa) {
        case 1:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Janeiro. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 2:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Fevereiro. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 3:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Março. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 4:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Abril. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 5:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Maio. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 6:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Junho. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 7:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Julho. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 8:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Agosto. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 9:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Setembro. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 10:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Outubro. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 11:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Novembro. <br> <br> <img src="Wedding_rings.jpg">`
            break
        case 12:
            document.getElementById("final").innerHTML = `${nome}, você irá se casar em Dezembro. <br> <br> <img src="Wedding_rings.jpg">`
            break
        default:
            document.getElementById("final").innerHTML = `${nome}, você não irá se casar. <br> <br> <img src="comemoracao.avif">`
    }



}