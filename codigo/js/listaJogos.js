(() => {
  function renderizarJogos(jogos = []) {
    const lista = D.querySelector("#lista-jogos");
    let jogosHTML = "";
    let primeiro = true;
    for (const jogo of jogos) {
      jogosHTML += `
<div class="col">
  <a href="jogo.html?id=${jogo.id}&titulo=${jogo.titulo}" class="bg-body-tertiary">
    <img class="img-fluid" src="${jogo.link_capa}" alt="Capa do jogo: ${jogo.titulo}">
    <h4 class="text-center"><span class="text-info">Ver detalhes e comentários sobre</span> <em class="text-info-emphasis">${jogo.titulo}</em></h4>
  </a>
</div>`;
    }
    lista.innerHTML = jogosHTML;
  }

  function main() {
    const fetch_jogos = new Request(DB + `jogos`, { keepalive: false });
    busca(fetch_jogos)
      .then(jogos => renderizarJogos(jogos), (err) => renderizarErro(err));
  }

  if (D.readyState == "complete") main(); else W.addEventListener("load", main);
})();