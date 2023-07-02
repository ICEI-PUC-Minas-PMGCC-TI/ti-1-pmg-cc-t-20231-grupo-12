(() => {
  function renderizarJogos(jogo) {
    D.querySelector("#capa").src = jogo.link_capa;
    D.querySelector("#titulo").textContent = jogo.titulo;
    D.querySelector("#descricao").textContent = jogo.descricao;
  }

  function main() {
    const idJogo = (new URL(W.location.href)).searchParams?.get("idJogo");
    if (idJogo == undefined)
      W.location.replace("jogos.html"); // Detalhes vem de um jogo específico..
    const fetch_jogo = new Request(DB + `jogos/${idJogo}`, { keepalive: false });
    busca(fetch_jogo)
      .then(jogo => renderizarJogos(jogo), (err) => renderizarErro(err));
  }

  if (D.readyState == "complete") main(); else W.addEventListener("load", main);
})();