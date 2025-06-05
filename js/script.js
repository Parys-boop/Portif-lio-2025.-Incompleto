document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("sticky-header");
    let lastScroll = 0;

    window.addEventListener("scroll", function() {
        const currentScroll = window.scrollY;

        // Rola para baixo: esconde o header
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.classList.add("hide");
        } 
        // Rola para cima: mostra o header
        else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });
});

//ALGUM ERRO QUE NÃO FAÇO IDEIA