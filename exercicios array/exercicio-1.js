function somaArray(){

    let numeros = document.getElementById("numero").value.split(", ")

    let soma = 0

    numeros.forEach(function(numero){
        soma += parseInt(numero)
    })

    document.getElementById("resultado").innerHTML = `A soma de todos esses números é: ${soma}` 
}