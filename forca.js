let palavraSecreta = prompt("Digite a palavra secreta: ").toUpperCase()
let tamanhoPalavra = palavraSecreta.length
let letrasJaChutadas = ""
let letrasErradas = ""
let letrasAcertadas = ""

for (let i = 0; i < tamanhoPalavra; i++) {
    letrasAcertadas += "_";
}

let tentativas = 0;
const maxTentativas = 6;

while (tentativas < maxTentativas){

    if (palavraSecreta.includes("-")) {
        for(let i = 0; i < tamanhoPalavra; i++){
            if(palavraSecreta[i] === "-"){
                letrasAcertadas = letrasAcertadas.slice(0,i) + "-" + letrasAcertadas.slice(i + 1)
            }
        }
    }

    let letraChutada = prompt(`Palavra: ${letrasAcertadas}\nTentativas: ${tentativas}\nLetras já chutadas: ${letrasJaChutadas}\nLetras erradas: ${letrasErradas}\nDigite uma letra: `).toUpperCase()

    if (letrasJaChutadas.includes(letraChutada) || letrasAcertadas.includes(letraChutada) || letrasErradas.includes(letraChutada)){
        prompt("Você já tentou essa letra! Tente novamente!")
        continue
    }
    if(palavraSecreta.includes(letraChutada)){
        for(let i = 0; i < tamanhoPalavra; i++){
            if(palavraSecreta[i] === letraChutada){
                letrasAcertadas = letrasAcertadas.slice(0,i) + letraChutada + letrasAcertadas.slice(i + 1)
            }
        }
        if(letrasAcertadas === palavraSecreta){
            alert(`Parabéns! Você acertou a palavra secreta "${palavraSecreta}" com ${tentativas + 1} tentativas.`)
            break
        }
    }
    else{
        tentativas++
        letrasErradas += letraChutada + ", "
        if(tentativas === maxTentativas){
            alert(`Você perdeu!`)
            break
        }
    }

    letrasJaChutadas += letraChutada + ", "
}