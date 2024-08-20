function recomendarfilme() {
 let resposta = document.getElementById("resultado");
    let idade = document.getElementById("idade").value
    let texto

switch(true){
    case (idade > 0 && idade <=12 ):
        texto = "Recomendamos filmes de Animação ou Aventura"
        break;

    case (idade > 12 && idade <= 17 ):
        texto = "Recomendamos filmes de Ação ou Drama";
        break;

    case (idade > 17 && idade <=64 ):
        texto = "Recomendamos filmes de Comédia ou Suspense";
        break;
        
    default:
        texto = "Recomendamos filmes de Romance ou Documentário"
        break;
    
}
document.getElementById('resultado').innerText = texto;

}