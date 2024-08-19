function saudacao() {
    const hora1 = new Date();
    const hora2 = hora1.getHours();
    if (hora2 >= 6 && hora2 < 12) { 
      document.getElementById ("resultado").innerHTML = 'Bom dia!!';

    } else if (hora2 >= 12 && hora2 <= 18) { 
        document.getElementById ("resultado").innerHTML = 'Boa Tarde!!';

    } else if (hora2 > 18 && hora2 <= 23) { 
        document.getElementById ("resultado").innerHTML = 'Boa noite!!';
    }
}
  
