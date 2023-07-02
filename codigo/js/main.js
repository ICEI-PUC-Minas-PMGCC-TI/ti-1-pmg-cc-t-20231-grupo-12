const W = window;
const D = document;
const DB = "https://playfind-db.pedroot.repl.co/";
let renderCounter = 0;
let renderListeners = {};

function decrementarContador() {
  renderCounter--;
  if (renderCounter == 0) {
    for (const func in renderListeners) {
      renderListeners[func]();
      renderListeners[func] = () => "called";
    }
  }
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

function renderizarErro(erro) {
  const [codigo, mensagem] = erro.message.split("~");
  alert(`ERRO ${codigo}: ${mensagem}</div>`);
}

(() => {
  function renderizarFragmentos() {
    D.querySelectorAll(".html-fragment").forEach(e => {
      renderCounter++;
      fetch(e.dataset.fragmentName + ".html", { keepalive: false }).then(r => r.text()).then(t => { e.outerHTML = t; decrementarContador(); });
    });
  }

  function renderizarHeader() {
    D.querySelectorAll(".nav-link").forEach(e => {
      if (W.location.pathname == e.pathname) {
        e.classList.add("active");
      }
    });
    const usr = sessionStorage.getItem("idUsuario");
    if (usr) {
      D.querySelector("#login").outerHTML = `<a id="perfil" href="/perfil?id="${usr} class="d-block btn btn-info me-4 mb-1">Perfil</a>`;
    }
  }

  function main() {
    renderizarFragmentos();
    renderListeners.header = renderizarHeader;
  }

  if (D.readyState != "loading") main(); else D.addEventListener("DOMContentLoaded", main);
})();