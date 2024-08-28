function somaArray(){

    let numeros = []

    let sla = document.getElementById("numero").value
    let sla2 = sla.split(", ")
    document.write(sla2)

    let soma = 0



    numeros.forEach(function(elemento){
        soma += numeros
    })

    document.getElementById("resultado").innerHTML = `a soma de todos esses números é: ${soma}` 
    
}