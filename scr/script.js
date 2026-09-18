// Mensagem ao clicar nos botões dos cursos
const botoesCurso = document.querySelectorAll("article button");

botoesCurso.forEach(function(botao) {
    botao.addEventListener("click", function() {
        alert("Este curso foi selecionado!");
    });
});

// Mensagem ao clicar em "Conhecer cursos"
const botaoConhecer = document.querySelector("#inicio button");

botaoConhecer.addEventListener("click", function() {
    document.querySelector("#cursos").scrollIntoView({
        behavior: "smooth"
    });
});

// Validação simples do formulário de login
const formulario = document.querySelector("#login form");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const email = document.querySelector("#email").value;
    const senha = document.querySelector("#senha").value;

    if (email === "" || senha === "") {
        alert("Preencha o e-mail e a senha.");
    } else {
        alert("Login realizado com sucesso!");
    }
});
