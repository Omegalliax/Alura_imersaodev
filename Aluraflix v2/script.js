function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
      listaFilmesNaTela();
    } else {
      console.error("O endereço deste filme é inválido!");
    }
    document.getElementById("filme").value = "";
  }
  
  function listaFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoFilmeFavorito;
  }
  