function calc() {
    var preco = parseFloat(document.getElementById("preco").value);
    let select = document.getElementById("select").value;

    if (select == "Bom"){
    let precoFinal = preco * 1.10
    document.getElementById("resultado").innerHTML = "Sua refeição de valor R$ " + preco + " com uma gorjeta de 10% fica em um valor total de R$ " + precoFinal.toFixed(2) + "."
    }

    else if (select == "Ótimo"){
    let precoFinal = preco * 1.15
    document.getElementById("resultado").innerHTML = "Sua refeição de valor R$ " + preco + " com uma gorjeta de 15% fica em um valor total de R$ " + precoFinal.toFixed(2) + "."
    }

    else if (select == "Excelente"){
    let precoFinal = preco * 1.20
    document.getElementById("resultado").innerHTML = "Sua refeição de valor R$ " + preco + " com uma gorjeta de 20% fica em um valor total de R$ " + precoFinal.toFixed(2) + "."
    }
}