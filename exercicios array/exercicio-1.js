function somaArray(){

    let numeros = [4, 9, 10, 15]

    let soma = 0

    numeros.forEach(function(numero){
        soma += numero
    })

    document.getElementById("resultado").innerHTML = `a soma de todos esses números é: ${soma}` 
    
}