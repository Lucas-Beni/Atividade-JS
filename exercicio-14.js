function MaisVelho() {
    let maior_Idade = 0;
    let nome_MaisVelho = '';

    for (let i = 0; i < 5; i++) {
        let nome = document.getElementById('nome' + i).value;
        let idade = parseInt(document.getElementById('idade' + i).value);

        if (idade > maior_Idade) {
            maior_Idade = idade;
            nome_MaisVelho = nome;
        }
    }

    document.getElementById('resultado').innerText = "A pessoa mais velha é " + nome_MaisVelho + ", com " + maior_Idade + " anos.";
}