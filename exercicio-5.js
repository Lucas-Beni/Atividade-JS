function saudacao() {
    const hora1 = new Date();
    const hora2 = hora1.getHours();
    if (hora2 >= 6 && hora2 < 12) { 
        document.getElementById ("resultado").innerHTML = 'Bom dia!!';
        document.body.style.backgroundImage = "url('img/exercicio-5/dia.jpg"
        document.getElementById("voltar").style.color = "#fff"
    } else if (hora2 >= 12 && hora2 <= 18) { 
        document.getElementById ("resultado").innerHTML = 'Boa Tarde!!';
        document.body.style.backgroundImage = "url('img/exercicio-5/tarde.jfif')";
        document.body.style.color = "#fff"
    } else if (hora2 > 18 && hora2 <= 23) { 
        document.getElementById ("resultado").innerHTML = 'Boa noite!!';
        document.body.style.backgroundImage = "url('img/exercicio-5/noite.jpg')";
        document.body.style.color = "#fff"
    }
}
  
