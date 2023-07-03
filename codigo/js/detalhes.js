(() => {
  let jogo_atual = {};
  let usuario_atual = {};

  function renderizarJogo(jogo) {
    D.querySelector("title").textContent = "Info: " + jogo.titulo;
    D.querySelector("#capa").src = jogo.link_capa;
    D.querySelector("#titulo").textContent = jogo.titulo;
    D.querySelector("#descricao").textContent = jogo.descricao;
    D.querySelector("#fabricante").textContent = "Desenvolvedor: " + jogo.desenvolvedor + " - Ano de lançamento: " + jogo.lancamento;
    if (jogo.comunidade) // Checar se existem comunidades
      D.querySelector("#comunidade").textContent = "Comunidade: " + jogo.comunidade;
  }

  function elemComentario(comentario) {
    let btnEditar = "";
    if (usuario_atual.id == comentario.idUsuario) {
      btnEditar = `<div class="d-flex justify-content-center"><button id="editar" class="btn btn-primary w-100">Editar</button></div>`;
    }
    return `
<div class="row py-3 my-2 mx-1 comentario">
  <div class="col-md-2 col-xs-4">
    <img class="img-fluid" src="img/usuarios/${comentario.idUsuario}/pfp.png">
  </div>
  <div class="col-10 pe-2">
      <div class="d-flex justify-content-between flex-wrap h-20 pb-1">
        <a class="bg-body-secondary text-decoration-none flex-grow-1 pb-1 ps-3 me-1"
            href="perfil.html?id=${comentario.idUsuario}"
            title="${comentario.username}">
            <h4 class="text-info mb-0 mt-1">${comentario.username}</h4>
        </a>
        <div class="flex-grow-2">
            <input type="number" class="form-control pontos-cmnt" value="${comentario.pontos}" disabled>
        </div>
      </div>
      ${btnEditar}
      <div class="w-100 h-80 pt-1">
        <textarea class="w-100 py-1 px-2 texto-cmnt undis" disabled>${comentario.texto}</textarea>
      </div>
    </div>
  </div>
</div>`;
  }

  function atualizarComentario(e) {
    const input_pontos = e.target.parentElement.parentElement.querySelector("input");
    const input_texto = e.target.parentElement.parentElement.querySelector("textarea");
    const indice = jogo_atual.comentarios.findIndex(c => c.idUsuario == usuario_atual.id);
    jogo_atual.comentarios[indice].pontos = Number(input_pontos.value);
    jogo_atual.comentarios[indice].texto = input_texto.value;
    fetch(DB + `jogos/${jogo_atual.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jogo_atual)
    }).then(() => location.reload(), () => alert("Erro"));
  }

  function editarComentario() {
    const e = D.querySelector("#editar");
    e.parentElement.parentElement.querySelector("input").disabled = false;
    e.parentElement.parentElement.querySelector("textarea").disabled = false;
    e.textContent = "Enviar";
    e.removeEventListener("click", editarComentario);
    e.addEventListener("click", atualizarComentario);
    e.className = e.className.replace("btn-primary", "btn-success");
  }

  function renderizarComentarios(comentarios = []) {
    if (comentarios.length == 0) {
      D.querySelector("#lista-cmnt").innerHTML = `<div class="alert alert-primary">Nada pra ver aqui, por enquanto.</div>`;
      return;
    }
    let html = "", soma = 0;
    for (const comentario of comentarios) {
      soma += Number(comentario.pontos);
      if (comentario.texto.length > 0)
        html += elemComentario(comentario);
    }
    D.querySelector("#media-cmnt").textContent = soma / comentarios.length;
    D.querySelector("#lista-cmnt").innerHTML = html;
    D.querySelector("#editar").addEventListener("click", editarComentario);
  }

  function enviarComentario(e) {
    let comentario = {};
    comentario.id = usuario_atual.id;
    comentario.username = usuario_atual.nome;
    comentario.pontos = Number(D.querySelector("#pontuacao").value);
    comentario.texto = D.querySelector("#texto-comentario").value;
    jogo_atual.comentarios.push(comentario);
    fetch(DB + `jogos/${jogo_atual.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jogo_atual)
    }).then(() => location.reload(), () => alert("Erro"));
  }

  function main() {
    usuario_atual = JSON.parse(sessionStorage.getItem("usuarioCorrente") || "{}");
    const idJogo = (new URL(W.location.href)).searchParams?.get("idJogo");
    if (idJogo == undefined)
      W.location.replace("jogos.html"); // Detalhes vem de um jogo específico..
    const fetch_jogo = new Request(DB + `jogos/${idJogo}`, { keepalive: false });
    busca(fetch_jogo)
      .then(jogo => {
        jogo_atual = jogo;
        renderizarJogo(jogo);
        renderizarComentarios(jogo.comentarios);
      }, (err) => renderizarErro(err));
    if (usuario_atual) {
      setTimeout(() => D.querySelector("#enviar-comentario").addEventListener("click", enviarComentario), 200);
      setTimeout(() => D.querySelector("#pontuacao").addEventListener("input", (e) => {
        let p = Number(e.target.value);
        let estrelasHTML = "";
        let i = 5;
        while (i-- > 0) {
          if (p >= 1) {
            estrelasHTML += `<i class="bi bi-star-fill"></i>`;
            p -= 1;
          } else if (p == 0.5) {
            estrelasHTML += `<i class="bi bi-star-half"></i>`;
            p -= 0.5;
          } else
            estrelasHTML += `<i class="bi bi-star"></i>`;
        }
        console.log(e.target.value);
        D.querySelector("#estrelas").innerHTML = estrelasHTML;
      }), 300);
    }
  }

  if (D.readyState == "complete") main(); else W.addEventListener("load", main);
})();
