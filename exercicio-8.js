function nivel() {
    let resposta = document.getElementById("resultado");
       let nivel = document.getElementById("nivel").value
       let texto
   
   switch(true){
       case (nivel > 0 && nivel <=199 ):
           texto = "Você é iniciante";
           break;
   
       case (nivel > 199 && nivel <= 499 ):
           texto = "Você é intermediário";
           break;
   
       case (nivel > 500 && nivel <=999 ):
           texto = "Você é Avançado";
           break;
           
       default:
           texto = "Você é mestre"
           break;
       
   }
   document.getElementById('resultado').innerText = texto;
   
   }