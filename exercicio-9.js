function quantidadeCaracteres(str) {
    return str.length >= 8 && str.length <= 16;
}

function letraMaiuscula(str){
    return /[A-Z]/.test(str);
}

function possuiNumeros(str) {
    return /[0-9]/.test(str);
}

function possuiCaracteresEspeciais(str) {
    return /[!@#$%^&*(),.?":{}|<>-_]/.test(str);
}

function verificarSenha(){

    var senha = String(document.getElementById("senha").value);

    estado = "";
   
    if (!quantidadeCaracteres(senha)) estado += 1;
    if (!letraMaiuscula(senha)) estado += 2;
    if (!possuiNumeros(senha)) estado += 4;
    if (!possuiCaracteresEspeciais(senha)) estado += 8;

    switch (estado) {
        case "":
            document.getElementById("resultado").innerHTML = "Senha criada com sucesso!";
            break;
        default:
            document.getElementById("resultado").innerHTML = "Por favor digite novamente!<br>Sua senha deve conter:<br><br>-Entre 8 e 16 caracteres<br>-Pelo menos uma letra maiúscula<br>-Pelo menos um número<br>-Pelo menos um caractere especial" ;
            break;

    }
}

