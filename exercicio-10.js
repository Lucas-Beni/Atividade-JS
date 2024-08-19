function verificarTemperatura() {
    
    let temperatura = parseInt(document.getElementById("temperatura").value)

    switch(true){
        case(temperatura <= 15):
        document.getElementById("resultado").innerHTML = "É recomendável que você utilize roupas como casacos e luvas"
        break
        case(temperatura > 15 && temperatura <= 25):
        document.getElementById("resultado").innerHTML = "É recomendável que você utilize roupas como jaquetas e cachecóis"
        break
        default:
            document.getElementById("resultado").innerHTML = "É recomendável que você utilize roupas como camisetas e chapéus"
        break
    }
}