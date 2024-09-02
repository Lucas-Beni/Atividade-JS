function MaisVelho() {
    let maiorIdade = 0;

    for (let i = 0; i < 5; i++) {
        let idade = parseInt(document.getElementById('idade' + i).value);

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
    }

    document.getElementById('resultado').innerText = "A maior idade é " + maiorIdade + " anos.";
}