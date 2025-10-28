// js/formValidation.js
document.addEventListener("submit", e => {
  if (e.target.tagName === "FORM") {
    e.preventDefault();

    const form = e.target;
    let valido = true;
    let mensagens = [];

    const nome = form.querySelector("#nome");
    if (nome && nome.value.trim().length < 3) {
      valido = false;
      mensagens.push("Nome deve ter pelo menos 3 caracteres.");
    }

    const cpf = form.querySelector("#cpf");
    if (cpf && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value)) {
      valido = false;
      mensagens.push("CPF deve estar no formato 000.000.000-00.");
    }

    const email = form.querySelector("#email");
    if (email && !email.value.includes("@")) {
      valido = false;
      mensagens.push("E-mail inválido.");
    }

    const telefone = form.querySelector("#telefone");
    if (telefone && telefone.value.length < 10) {
      valido = false;
      mensagens.push("Telefone deve ter pelo menos 10 dígitos.");
    }

    // Exibir mensagens
    let alertBox = document.querySelector(".alert");
    if (!alertBox) {
      alertBox = document.createElement("div");
      alertBox.className = "alert";
      form.prepend(alertBox);
    }

    if (!valido) {
      alertBox.textContent = mensagens.join(" ");
      alertBox.className = "alert alert-error";
    } else {
      alertBox.textContent = "Cadastro realizado com sucesso!";
      alertBox.className = "alert alert-success";

      // Salvar no localStorage
      const dados = Object.fromEntries(new FormData(form));
      localStorage.setItem("cadastro", JSON.stringify(dados));
      form.reset();
    }
  }
});
