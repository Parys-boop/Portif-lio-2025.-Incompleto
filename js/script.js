document.addEventListener("DOMContentLoaded", function() {
    // Header hide/show on scroll (corrigido selector)
    const header = document.querySelector("header");
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

    // Smooth scroll: sempre ativo (removida dependência de checkbox/label)
    const htmlEl = document.documentElement;
    htmlEl.classList.add("smooth-scroll");

    // Botões com data-target que realizam scroll para seções
    document.querySelectorAll(".btn-anchor").forEach(btn => {
        btn.addEventListener("click", function() {
            const targetSelector = this.getAttribute("data-target");
            if (!targetSelector) return;
            const target = document.querySelector(targetSelector);
            if (!target) return;

            // Se a classe smooth-scroll estiver presente, o CSS cuidará do comportamento.
            // Como agora sempre está presente, o CSS será usado.
            if (htmlEl.classList.contains("smooth-scroll")) {
                target.scrollIntoView({ block: "start" });
            } else {
                target.scrollIntoView({ block: "start", behavior: "auto" });
            }
        });
    });

    // Cópia de e-mail para a área de transferência
    const copyBtn = document.getElementById("copyBtn");
    const emailText = document.getElementById("emailText");
    if (copyBtn && emailText) {
        copyBtn.addEventListener("click", function() {
            const email = emailText.textContent.trim();
            navigator.clipboard.writeText(email)
                .then(() => {
                    // feedback simples; troque por um toast mais elegante se quiser
                    alert("E-mail copiado para a área de transferência!");
                })
                .catch(err => {
                    console.error('Erro ao copiar e-mail: ', err);
                });
        });
    }
});