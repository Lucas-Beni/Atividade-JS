function conversor() {
       let valor = document.getElementById("Digite seu valor aqui").value
       let dolar1 = valor / 5
       let euro1 = valor / 5.5
       let libra1 = valor / 6
       let dolar2 = 
       let euro2 = 
       let libra2 = 
   
   switch(true){
       case (dolar2):
           document.getElementById("resultado").innerHTML = "O valor " + valor + " transformado em dolar fica no valor de " + dolar1 + " dolares.";
           break;
   
       case (euro2):
        document.getElementById("resultado").innerHTML = "O valor " + valor + " transformado em euro fica no valor de " + euro1 + " euro.";
           break;
   
       case (libra2):
           document.getElementById("resultado").innerHTML = "o valor " + valor + " trannsformado em libra fica o valor de " + libra1 + "libras";
           break;
           
       
   }
   
   }