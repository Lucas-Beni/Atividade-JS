function notamedia() {
    let prova1 = parseFloat(document.getElementById('nota1').value)
    let prova2 = parseFloat(document.getElementById('nota2').value)
    let prova3 = parseFloat(document.getElementById('nota3').value)
    let prova4 = parseFloat(document.getElementById('nota4').value)
    let resultado = (prova1 + prova2 + prova3 + prova4) / 4

if  (resultado >= 7) {
    document.getElementById("media").innerHTML = "Você está aprovado!";
}
else if(resultado>=5 && resultado < 7){
    document.getElementById("media").innerHTML = "Você está de recuperação!";
}  
else{
    document.getElementById("media").innerHTML = "Você está reprovado!"
}
}