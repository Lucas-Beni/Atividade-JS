function tabuada(){

    var numero = parseInt(document.getElementById('numero').value);
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (isNaN(numero)) {
        resultadoDiv.innerHTML = 'Por favor, digite um número válido.';
        return;
    }

    let contador = 1;

    while (contador <= 10) {
        let resultado = numero * contador;
        resultadoDiv.innerHTML += `${numero} x ${contador} = ${resultado}<br>`;
        contador++;
    }
}
