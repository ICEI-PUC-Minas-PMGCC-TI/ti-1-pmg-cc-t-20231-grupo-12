(() => {
  function renderizarJogos(jogos = [], categorias = []) {
    const lista = D.querySelector("#lista-jogos");
    let jogosHTML = "";
    if (categorias.length > 0)
      jogos = jogos.filter(jogo => categorias.some(categoria => jogo.categorias.toLowerCase().includes(categoria.toLowerCase())));
    for (const jogo of jogos) {
      jogosHTML += `
<div class="col mb-3">
  <a href="detalhes.html?idJogo=${jogo.id}&titulo=${jogo.titulo}" class="bg-body-tertiary">
    <img class="img-fluid" src="${jogo.link_capa}" alt="Capa do jogo: ${jogo.titulo}">
    <h4 class="text-center"><span class="text-info">Ver detalhes e comentários sobre</span> <em class="text-info-emphasis">${jogo.titulo}</em></h4>
  </a>
</div>`;
    }
    lista.innerHTML = jogosHTML;
  }

  function main() {
    const fetch_jogos = new Request(DB + `jogos`, { keepalive: false });
    const categorias = (new URL(W.location.href)).searchParams?.get("cat")?.split(",");
    if (categorias?.length > 0)
      D.querySelector("#titulo-listagem").textContent = "Filtro: " + categorias.join(", ");
    busca(fetch_jogos)
      .then(jogos => renderizarJogos(jogos, categorias), (err) => renderizarErro(err));
  }

  if (D.readyState == "complete") main(); else W.addEventListener("load", main);
})();