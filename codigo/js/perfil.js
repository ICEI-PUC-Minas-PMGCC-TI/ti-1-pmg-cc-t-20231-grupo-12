function editarUsu(id, nickname, descricao) {
  if (typeof localStorage !== 'undefined') {
    const dadosArmazenadosString = localStorage.getItem("usuarios");
    if (dadosArmazenadosString == null) {
      const dados = [
        {
          id: "1",
          nickname: "kami",
          descricao: "Streamer e ex jogador profissional de lol"
        },
        {
          id: "2",
          nickname: "mylon",
          descricao: "Streamer e aspirante a advogado"
        },
        {
          id: "3",
          nickname: "Titan",
          descricao: "Adc da redCanids"
        },
        {
          id: "4",
          nickname: "Callisto",
          descricao: "Principe e tirano"
        },
        {
          id: "5",
          nickname: "Nobara",
          descricao: "tem um martelo"
        }
      ];

      const dadosString = JSON.stringify(dados);
      localStorage.setItem("usuarios", dadosString);
    }

    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    const usuarioAtual = usuarios.find(user => user.id === id);

    if (usuarioAtual) {
      usuarioAtual.nickname = nickname;
      usuarioAtual.descricao = descricao;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      window.alert('Valor editado com sucesso!');
    } else {
      window.alert('ID não encontrada no localStorage.');
    }
  } else {
    window.alert('Desculpe, o localStorage não é suportado pelo seu navegador.');
  }
}

function removeUsu(id) {
  if (typeof localStorage !== 'undefined') {
    const dadosArmazenadosString = localStorage.getItem('usuarios');
    if (dadosArmazenadosString !== null) {
      const usuarios = JSON.parse(dadosArmazenadosString);
      const index = usuarios.findIndex(user => user.id === id);
      if (index !== -1) {
        usuarios.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        window.alert('Item removido com sucesso!');
      } else {
        window.alert('ID não encontrada no localStorage.');
      }
    } else {
      window.alert('Nenhum usuário encontrado no localStorage.');
    }
  } else {
    window.alert('Desculpe, o localStorage não é suportado pelo seu navegador.');
  }
}
