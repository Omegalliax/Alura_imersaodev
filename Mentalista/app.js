var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var Resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    Resultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    Resultado.innerHTML = "Você deve digitar um numero de 0 a 10!";
  } else {
    Resultado.innerHTML = "Você errou, o numero secreto era: " + numeroSecreto;
  }
}
