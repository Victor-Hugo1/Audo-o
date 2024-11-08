window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const pontoDeMudanca = 50; // Defina o ponto onde a mudança ocorre

    if (window.scrollY > pontoDeMudanca) {
        header.classList.add("boxshadow");
    } else {
        header.classList.remove("boxshadow");

    }})


    document.addEventListener("DOMContentLoaded", function () {
        // Aplica o efeito de fade-in e blur ao carregar a página
        document.body.classList.add("page-transition-in");
    });
    
    function navigateTo(url) {
        // Aplica o efeito de fade-out com blur antes de sair da página
        document.body.classList.add("page-transition-out");
    
        setTimeout(function () {
            window.location.href = url;
        }, 800); // Sincroniza com o tempo da animação fadeOutBlur (0.8s)
    }
    