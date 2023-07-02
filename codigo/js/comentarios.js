const data_origin = "https://playfind-db.pedroot.repl.co/";
let jogo_atual = {};
let usuario_atual = sessionStorage.getItem("idUsuario");

function elemComentario(comentario) {
  let btnEditar = "";
  if (usuario_atual == comentario.idUsuario) {
    btnEditar = `<button id="e" onclick="editarComentario()" class="col-md-3 col-sm-12 btn btn-primary">Editar</button>`;
  }
  return `<div class="row py-3 my-2 mx-1 comentario">
  <div class="col-2">
    <img class="pfp-cmnt" src="img/usuarios/${comentario.idUsuario}/pfp.png">
  </div>
  <div class="col-10 pe-2">
    <div class="container d-flex flex-column h-100">
      <div class="row h-20 pb-1">
          <a class="col-lg-3 col-md-4 pb-1 autor-cmnt"
              href="perfil?id=${comentario.idUsuario}"
              title="${comentario.username}">
            ${comentario.username}
          </a>
          <div class="col">
            <div class="h-100 d-inline-flex flex-column justify-content-center">
              <input type="number" class="pontos-cmnt" value="${comentario.pontos}" disabled>
            </div>
          </div>
          ${btnEditar}
      </div>
      <div class="row h-80 pt-1">
        <textarea class="col-12 py-1 px-2 texto-cmnt undis" disabled>${comentario.texto}</textarea>
      </div>
    </div>
  </div>
</div>`;
}

function atualizarComentario(e) {
  const input_pontos = e.target.parentElement.parentElement.querySelector("input");
  const input_texto = e.target.parentElement.parentElement.querySelector("textarea");
  const indice = jogo_atual.comentarios.findIndex(c => c.idUsuario == usuario_atual);
  jogo_atual.comentarios[indice].pontos = Number(input_pontos.value);
  jogo_atual.comentarios[indice].texto = input_texto.value;
  fetch(data_origin + `jogos/${jogo_atual.id}`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(jogo_atual)
  }).then(() => location.reload(), () => alert("Erro"));
}

function editarComentario() {
  const e = document.getElementById("e");
  e.parentElement.parentElement.querySelector("input").disabled = false;
  e.parentElement.parentElement.querySelector("textarea").disabled = false;
  e.textContent = "Enviar";
  e.removeAttribute("onclick");
  e.addEventListener("click", atualizarComentario);
  e.className = e.className.replace("btn-primary", "btn-success");
}

function renderizarComentarios(comentarios = []) {
  if (comentarios.length == 0) {
    document.querySelector("#lista-cmnt").innerHTML = `<div class="alert alert-primary">Nada pra ver aqui, por enquanto.</div>`;
    return;
  }
  let html = "", soma = 0;
  for (const comentario of comentarios) {
    soma += Number(comentario.pontos);
    if (comentario.texto.length > 0)
      html += elemComentario(comentario);
  }
  document.querySelector("#media-cmnt").textContent = soma / comentarios.length;
  document.querySelector("#lista-cmnt").innerHTML = html;
}

function renderizarErro(erro) {
  const [codigo, mensagem] = erro.message.split("~");
  document.querySelector("#lista-cmnt").innerHTML = `<div class="alert alert-danger">ERRO ${codigo}: ${mensagem}</div>`;
}

function busca(req) {
  return fetch(req).then(
    (resp) => {
      if (resp.ok)
        return resp.json();
      else
        throw new Error(resp.status + "~" + resp.statusText)
    },
    () => { throw new Error("-1~Erro de rede fatal"); }
  );
}

function onready(callback) {
  if (document.readyState != "loading")
    callback();
  else
    document.addEventListener("DOMContentLoaded", callback);
}
(() => {
  // <------- para debug:
  sessionStorage.setItem("idUsuario", "201");
  //  ------->
  const url = new URL(window.location.href);
  const idJogo_pesquisado = url.searchParams.get("idJogo");
  // <------- para debug:
  if (idJogo_pesquisado == null) location.href = location.href + "?idJogo=3";
  //  ------->
  const req = new Request(data_origin + `jogos/${idJogo_pesquisado}`);
  const b = busca(req);
  onready(() => b.then(
    (j) => { jogo_atual = j; renderizarComentarios(j.comentarios); },
    (e) => renderizarErro(e))
  );
})();