// js/storage.js
document.addEventListener("DOMContentLoaded", () => {
  const dados = localStorage.getItem("cadastro");
  if (dados) {
    console.log("Dados salvos:", JSON.parse(dados));
  }
});
