window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    const pontoDeMudanca = 50; // Defina o ponto onde a mudança ocorre

    if (window.scrollY > pontoDeMudanca) {
        header.classList.add("boxshadow");
    } else {
        header.classList.remove("boxshadow");

    }})


    document.addEventListener("DOMContentLoaded", function () {
        
        document.body.classList.add("transicao-blur-entrando");
    });
    
    function navigateTo(url) {
       
        document.body.classList.add("transicao-blur-saindo");
    
        setTimeout(function () {
            window.location.href = url;
        }, 400); 
    }
    