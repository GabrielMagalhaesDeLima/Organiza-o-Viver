// js/app.js
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  const links = document.querySelectorAll("nav a");

  // Templates simples
  const templates = {
    inicio: `
      <section>
        <h2>Quem somos</h2>
        <p>Somos uma Organização sem fins lucrativos dedicada a ajudar crianças e adolescentes com câncer.</p>
        <img src="img/inicio.jpg" alt="crianças">
      </section>
    `,
    projetos: `
      <section>
        <h2>Projeto Acolher</h2>
        <p>Suporte emocional e psicológico para crianças e adolescentes.</p>
        <img src="img/Criança no psicologo.JPG" alt="Crianças em atividade de acolhimento">
      </section>
      <section>
        <h2>Projeto Educação</h2>
        <p>Aulas adaptadas para crianças em tratamento oncológico.</p>
        <img src="img/Crianças Estudando.JPG" alt="Crianças estudando">
      </section>
    `,
    cadastro: `
      <section>
        <h2>Cadastro</h2>
        <p><em>Use o formulário abaixo para se cadastrar.</em></p>
        <div id="form-container"></div>
      </section>
    `
  };

  // Navegação SPA
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("href").replace(".html", "");
      main.innerHTML = templates[page] || "<p>Página não encontrada</p>";

      // Se for cadastro, injeta o formulário original
      if (page === "cadastro") {
        fetch("cadastro.html")
          .then(res => res.text())
          .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const form = doc.querySelector("form");
            document.getElementById("form-container").appendChild(form);
          });
      }
    });
  });
});
