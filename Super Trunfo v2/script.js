var carta1 = {
    nome: "Pikachu",
    imagem:
      "https://th.bing.com/th/id/R.2636113e7fe9561cf56ca1f4665e9003?rik=RG23a2giyMkoLA&pid=ImgRaw&r=0",
    atributos: {
      ataque: 10,
      defesa: 4,
      AP: 6
    }
  };
  
  var carta2 = {
    nome: "Kuririn",
    imagem:
      "https://th.bing.com/th/id/R.ab39e1fd5d809ff419639972d1b26487?rik=Pv1Ba7DLyVftBw&pid=ImgRaw&r=0",
    atributos: {
      ataque: 5,
      defesa: 5,
      AP: 5
    }
  };
  
  var carta3 = {
    nome: "Ultra Instinct Son Goku",
    imagem:
      "https://th.bing.com/th/id/OIP.COr90G83in10JRBkmJIgXQHaKf?w=205&h=290&c=7&r=0&o=5&pid=1.7",
    atributos: {
      ataque: 10,
      defesa: 10,
      AP: 1
    }
  };
  var carta4 = {
    nome: "Vegeta Ultra Ego",
    imagem:
      "https://th.bing.com/th/id/OIP.1RZkg_YVY-G3Tk54TqciMwHaJ4?pid=ImgDet&rs=1",
    atributos: {
      ataque: 10,
      defesa: 10,
      AP: 5
    }
  };
  var cartas = [carta1, carta2, carta3, carta4];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 4);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 4);
    }
    cartaJogador = cartas[numeroCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
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
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      divResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem}])`;
    var moldura =
      '<img src ="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type ='radio' name ='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem}])`;
    var moldura =
      '<img src ="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type ='text' name ='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }