// Função para verificar se o gênero selecionado é diferente dos outros dois
function escolherGenero(atual, outro1, outro2) {
    var generoAtual = document.getElementById(atual).value;
    var generoOutro1 = document.getElementById(outro1).value;
    var generoOutro2 = document.getElementById(outro2).value;

    if (generoAtual === generoOutro1 || generoAtual === generoOutro2) {
        alert("Por favor, selecione um gênero diferente.");
        document.getElementById(atual).selectedIndex = 0; 
    }
}

// Função para salvar os dados no Local Storage
function salvarCadastro() {
    var nomeJogo = document.getElementById('nome-jogo').value;
    var genero1 = document.getElementById('genero1').value;
    var genero2 = document.getElementById('genero2').value;
    var genero3 = document.getElementById('genero3').value;
    var plataformas = [];
    var checkboxes = document.getElementsByName('plataforma');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            plataformas.push(checkboxes[i].value);
        }
    }
    var descricao = document.getElementById('descricao').value;
    var preco = document.getElementById('preco').value;
    var linkCompra = document.getElementById('link-compra').value;
    var linkImagem = document.getElementById('link-imagem').value;
    // Cria um objeto com os dados do jogo
    var jogo = {
        nome: nomeJogo,
        genero1: genero1,
        genero2: genero2,
        genero3: genero3,
        plataformas: plataformas,
        descricao: descricao,
        preco: preco,
        linkCompra: linkCompra,
        linkImagem: linkImagem
    };
    // Salva o objeto jogo no Local Storage
    localStorage.setItem('jogo', JSON.stringify(jogo));
    // Limpa os campos do formulário
    document.getElementById('nome-jogo').value = '';
    document.getElementById('genero1').value = '';
    document.getElementById('genero2').value = '';
    document.getElementById('genero3').value = '';
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    document.getElementById('descricao').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('link-compra').value = '';
    document.getElementById('link-imagem').value = '';
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    salvarCadastro();
    alert('Jogo cadastrado com sucesso!');
});