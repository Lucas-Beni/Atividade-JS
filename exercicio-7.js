function calc() {
    let local = document.getElementById("local").value

    let peso = parseFloat(document.getElementById("peso").value)

    switch(true) {

        case (local == "norte"):
            switch(true) {
                case (peso <= 5):
                    document.getElementById('result').innerHTML = "O valor do frete é 15R$."
                break

                default:
                    document.getElementById('result').innerHTML = "O valor do frete é 25R$."
                break
            }
        break

        case (local == "sul"):
            switch(true) {
                case (peso <= 5):
                    document.getElementById('result').innerHTML = "O valor do frete é 10R$."
                break

                default:
                    document.getElementById('result').innerHTML = "O valor do frete é 20R$."
                break
            }
        break

        case (local == "centroOeste"):
            switch(true) {
                case (peso <= 5):
                    document.getElementById('result').innerHTML = "O valor do frete é 12R$"
                break

                default:
                    document.getElementById('result').innerHTML = "O valor do frete é 22R$"
                break
            }
        break
    }
}