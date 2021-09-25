var carta1 = {
    nome: "Pikachu",
    atributos: {
      ataque: 10,
      defesa: 4,
      AP: 6
    }
  };
  
  var carta2 = {
    nome: "Kuririn",
    atributos: {
      ataque: 5,
      defesa: 5,
      AP: 5
    }
  };
  
  var carta3 = {
    nome: "Ultra Instinct Son Goku",
    atributos: {
      ataque: 10,
      defesa: 10,
      AP: 1
    }
  };
  
  var cartas = [carta1, carta2, carta3];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type ='radio' name ='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "Você venceu!";
    } else if (valorCartaMaquina > valorCartaJogador) {
      elementoResultado.innerHTML = "Você perdeu! A carta da maquina é maior!";
    } else {
      elementoResultado.innerHTML = "Empatou!";
    }
    console.log(cartaMaquina);
  }
  
