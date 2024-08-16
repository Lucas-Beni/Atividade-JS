function verificarPalpite() {

    var palpiteUsuario = parseInt(document.getElementById("palpite").value);

    var numeroAleatorio = Math.floor(Math.random() * 10) + 1;

    if (palpiteUsuario == numeroAleatorio) {
        document.getElementById("resultado").innerHTML = "Parabéns, você acertou!";
    } else {
        document.getElementById("resultado").innerHTML = "Tente novamente! O número certo era " + numeroAleatorio;
    }
}