function verificarAno() {
    const ano= parseFloat(document.getElementById("ano").value)

if (ano%4==0 && !ano%100==0) {
    document.getElementById("resultado").innerHTML = "Esse ano é bissexto";
}

else {
    document.getElementById("resultado").innerHTML = "Esse ano não é bissexto";
}
}