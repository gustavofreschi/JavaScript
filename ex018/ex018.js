var hearts = 5

function heart() {
    hearts++
    exibirCoracoes()
}

function hurt() {
    hearts--
    exibirCoracoes()
} 

function exibirCoracoes() {
    document.getElementById('coracao').innerHTML =`<img class = "heart" src="heart.webp">`
    for (i = 1; i <= hearts ; i++) {
        document.getElementById('coracao').innerHTML +=`<img class = "heart" src="heart.webp">`
    }
}


function gameover() {
    if(hearts <= 0) {
        document.getElementById('mario').innerHTML = `<img src="gameover.jpg">`
    } else {
        for (i = 1; i <= hearts ; i++) {
            document.getElementById('coracao').innerHTML +=`<img class = "heart" src="heart.webp">`
        }
    }
    
}