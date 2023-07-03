document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Cria um objeto para armazenar os dados do formulário
    var formData = {
        name: name,
        email: email,
        message: message
    };

    var existingData = localStorage.getItem("formData");

    if (existingData) {
        var parsedData = JSON.parse(existingData);

        parsedData.push(formData);

        // Atualiza os dados no Local Storage
        localStorage.setItem("formData", JSON.stringify(parsedData));
    } else {
        var newData = [formData];

        // Salva os dados no Local Storage
        localStorage.setItem("formData", JSON.stringify(newData));
    }

    // Limpa os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Exibe uma mensagem de confirmação
    var successMessage = document.getElementById("success-message");
    successMessage.textContent = "Obrigado por entrar em contato! Responderemos em breve.";
    setTimeout(function () {
        successMessage.textContent = "";
    }, 3000);
});