function conversor() {
       var valor = parseFloat(document.getElementById("moeda").value);
       let select = document.getElementById("select").value;
   
   switch(true){
       case (select == "dolar"):
            let dolar = valor / 5
            document.getElementById("resultado").innerHTML = "O valor de " + valor + " reais transformado em dólares fica no valor de " + dolar.toFixed(2) + " dólares.";
            break;
   
       case (select == "euro"):
            let euro = valor / 5.5
            document.getElementById("resultado").innerHTML = "O valor de " + valor + " reais transformado em euros fica no valor de " + euro.toFixed(2) + " euros.";
            break;
   
       case (select == "libra"):
            let libra = valor / 6
            document.getElementById("resultado").innerHTML = "o valor de " + valor + " reais trannsformado em libras esterlinas fica o valor de " + libra.toFixed(2) + " libras esterlinas";
            break;
           
       
   }
   
   }