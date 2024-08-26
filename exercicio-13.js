function verificar(){
    let num = parseInt(document.getElementById("num").value)

    for (let q = 1; q < 2; q++) {
        if (num % 2 === 0) {
            document.getElementById("resultado").innerHTML = "Este número é par!"
        } else {
            document.getElementById("resultado").innerHTML = "Este número é impar!"

        }
    }
}