(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");

  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (e) {
      e.classList.add("in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    els.forEach(function (e) {
      io.observe(e);
    });
  }
})();

(function () {
  const btn = document.getElementById("submitBtn");
  if (!btn) return;

  btn.addEventListener("click", function () {
    const nome = document.getElementById("nome").value.trim();

    if (nome.length < 2) {
      document.getElementById("nome").focus();
      return;
    }

    const numero = "557998071213";

    const mensagem =
`Olá!

Meu nome é ${nome}.

Tenho interesse em participar da primeira turma do Círculo Santé.`;

    window.open(
      `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  });
})();