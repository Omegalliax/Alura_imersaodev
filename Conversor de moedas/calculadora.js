function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReais = valorEmDolarNumerico * 5.25;
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O Resultado em real é R$ " + valorEmReais;
    elementoValorConvertido.innerHTML = valorConvertido;
  }