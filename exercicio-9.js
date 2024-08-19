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

    estado = 0;
    
    if (!letraMaiuscula(senha)) estado += 1;
    if (!possuiNumeros(senha)) estado += 2;
    if (!possuiCaracteresEspeciais(senha)) estado += 4;

    switch (estado) {
        case 1:
            document.getElementById("resultado").innerHTML = "A senha não contém letras maiúsculas. Por favor, digite novamente.";
            break;
        case 2:
            document.getElementById("resultado").innerHTML = "A senha não contém números. Por favor, digite novamente.";
            break;
        case 3:
            document.getElementById("resultado").innerHTML = "A senha não contém letras maiúsculas e números. Por favor, digite novamente.";
            break;
        case 4:
            document.getElementById("resultado").innerHTML = "A senha não contém caracteres especiais. Por favor, digite novamente.";
            break;
        case 5:
            document.getElementById("resultado").innerHTML = "A senha não contém letras maiúsculas e caracteres especiais. Por favor, digite novamente.";
            break;
        case 6:
            document.getElementById("resultado").innerHTML = "A senha não contém números e caracteres especiais. Por favor, digite novamente.";
            break;
        case 7:
            document.getElementById("resultado").innerHTML = "A senha não contém letras maiúsculas, números e caracteres especiais. Por favor, digite novamente.";
            break;
        default:
            document.getElementById("resultado").innerHTML = "A senha foi criada com sucesso!";
            break;
    }
}
