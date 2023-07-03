(() => {
  function renderizarCarrossel(lancamentos = []) {
    const carrossel = D.querySelector("#carrossel");
    let indicadores = "";
    let slides = "";

    for (const item of lancamentos) {
      slides += `
<div class="carousel-item outline text-center">
  <img src="${item.link_imagem}" class="d-inline-block" alt="${item.titulo}">
  <div class="carousel-caption d-none d-md-block">
    <h2>${item.titulo}</h2>
    <p>${item.splash}</p>
  </div>
</div>`;
    }

    for (let i = 0; i < lancamentos.length; i++) // Linkar os indicadores
      indicadores += `<a data-bs-target="#carrossel" data-bs-slide-to="${i}" aria-label="Slide ${i}"></a>`;

    carrossel.querySelector(".carousel-inner").innerHTML = slides;
    carrossel.querySelector(".carousel-indicators").innerHTML = indicadores;
    carrossel.querySelector(".carousel-indicators a").classList.add("active"); // Primeiro elemento
    carrossel.querySelector(".carousel-item").classList.add("active"); // Primeiro elemento}

  }
  function renderizarNoticias(noticias = []) {
    const lista = D.querySelector("#noticias");
    let noticiasHTML = "";
    for (const noticia of noticias) {
      noticiasHTML += `
<div class="row news-item row row-cols-xl-2 row-cols-1 mb-4">
<img src="${noticia.link_imagem}" class="col" alt="${noticia.titulo}">
<div class="col">
  <h2 class="news-title">${noticia.titulo}</h2>
  <p>${noticia.texto}</p>
</div>
</div>`;
    }
    lista.innerHTML = noticiasHTML;
  }

  function main() {
    const fetch_lancamentos = new Request(DB + `lancamentos`, { keepalive: false });
    const fetch_noticias = new Request(DB + `noticias`, { keepalive: false });
    busca(fetch_lancamentos)
      .then((lancamentos) => renderizarCarrossel(lancamentos), (err) => renderizarErro(err));
    busca(fetch_noticias)
      .then(noticias => renderizarNoticias(noticias), (err) => renderizarErro(err));
  }

  if (D.readyState == "complete") main(); else W.addEventListener("load", main);
})();