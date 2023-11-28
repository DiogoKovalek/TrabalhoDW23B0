function calcular(){
    var nome = document.getElementById("Nome").value;
    var altura = document.getElementById("Altura").value;
    var peso = document.getElementById("Peso").value;


    var IMC = peso / (altura*altura);

    if (IMC < 18.5) {
        document.getElementById("IMC").innerHTML = nome + " Seu IMC é " + Math.round(IMC) + "<br> e você está na classificação <br>>>> Magreza!!!";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        document.getElementById("IMC").innerHTML = nome + " Seu IMC é " + Math.round(IMC) + "<br> e você está na classificação <br>>>> Normal!!!";
    } else if (IMC >= 25 && IMC <= 29.9) {
        document.getElementById("IMC").innerHTML = nome + " Seu IMC é " + Math.round(IMC) + "<br> e você está na classificação <br>>>> Sobrepeso!!!";
    } else if (IMC >= 30 && IMC <= 34.9) {
        document.getElementById("IMC").innerHTML = nome + " Seu IMC é " + Math.round(IMC) + "<br> e você está na classificação <br>>>> Obesidade grau I!!!";
    } else if (IMC >= 35 && IMC <= 39.9) {
        document.getElementById("IMC").innerHTML = nome + " Seu IMC é " + Math.round(IMC) + "<br> e você está na classificação <br>>>> Obesidade grau II!!!";
    } else if (IMC >= 40) {
        document.getElementById("IMC").innerHTML = nome + " Seu IMC é " + Math.round(IMC) + "<br> e você está na classificação <br>>>> Obesidade grau III!!!";
    }
        

    
}