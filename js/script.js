document.addEventListener("DOMContentLoaded", function() {
    // Header hide/show on scroll
    const header = document.querySelector("header");
    let lastScroll = 0;

    window.addEventListener("scroll", function() {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScroll && currentScroll > 50) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll:
    const htmlEl = document.documentElement;
    htmlEl.classList.add("smooth-scroll");

    document.querySelectorAll(".btn-anchor").forEach(btn => {
        btn.addEventListener("click", function() {
            const targetSelector = this.getAttribute("data-target");
            if (!targetSelector) return;
            const target = document.querySelector(targetSelector);
            if (!target) return;

            // usar sempre rolagem suave
            target.scrollIntoView({ block: "start", behavior: "smooth" });
        });
    });

    // Copy e-mail
    const copyBtn = document.getElementById("copyBtn");
    const emailText = document.getElementById("emailText");
    if (copyBtn && emailText) {
        copyBtn.addEventListener("click", function() {
            const email = emailText.textContent.trim();
            navigator.clipboard.writeText(email)
                .then(() => {
                    alert("E-mail copiado para a área de transferência!");
                })
                .catch(err => {
                    console.error('Erro ao copiar e-mail: ', err);
                });
        });
    }

    // ========== Barra de progresso do curso ==========
    // A barra representa o mês atual em escala de 1 a 12.
    // Ex.: mês 8  => 8/12 = 66.66% e texto "////////----"

    function updateCourseProgress(date = new Date()) {
        const month = (date.getMonth() + 1); // 1..12
        const totalMonths = 12;
        const percent = Math.round((month / totalMonths) * 100);

        const progressFill = document.getElementById("progressFill");
        const progressPercent = document.getElementById("progressPercent");
        const progressText = document.getElementById("progressText");

        if (progressFill) {
            progressFill.style.width = percent + "%";
            // Atualiza aria-valuenow
            const container = progressFill.closest(".progress-container");
            if (container) container.setAttribute("aria-valuenow", percent);
        }
        if (progressPercent) progressPercent.textContent = percent + "%";
        if (progressText) {
            const filled = "/".repeat(month);
            const empty = "-".repeat(totalMonths - month);
            progressText.textContent = filled + empty; // exemplo: "////////----"
        }
    }

    // chama ao carregar
    updateCourseProgress();

    // opcional: atualizar à meia-noite caso a página fique aberta (atualiza a cada 1 hora)
    setInterval(() => updateCourseProgress(new Date()), 1000 * 60 * 60);
});