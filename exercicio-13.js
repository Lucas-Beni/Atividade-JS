function verificar(){
    let num = parseInt(document.getElementById("num").value)

    do {
        if (num % 2 === 0) {
            document.getElementById("resultado").innerHTML = "Este número é par!"
        } else {
            document.getElementById("resultado").innerHTML = "Este número é impar!"
        }
    } while (0 === 1)
}