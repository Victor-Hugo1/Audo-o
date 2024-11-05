window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const pontoDeMudanca = 50; // Defina o ponto onde a mudança ocorre

    if (window.scrollY > pontoDeMudanca) {
        header.classList.add("boxshadow");
    } else {
        header.classList.remove("boxshadow");

    }})