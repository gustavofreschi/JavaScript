function sortear() {
    document.getElementById("final").innerHTML = ``
    
    for (let i = 1; i <= 6 ; i++ ) {
    var result = parseInt(Math.random() * 60)
     document.getElementById("final").innerHTML += `${result} `
   }
}