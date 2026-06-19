const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // dispara una sola vez
      }
    });
  },
  { threshold: 0.12 }, // aparece cuando el 12% de la sección es visible
);

// Micro-interacción: mouseenter en desktop, touchstart en mobile
document.querySelectorAll(".btn").forEach((btn) => {
  let animating = false;
  const label = btn.querySelector(".btn-label");

  function trigger() {
    if (animating) return;
    animating = true;
    btn.classList.add("tapped");
    label.addEventListener(
      "animationend",
      () => {
        btn.classList.remove("tapped");
        animating = false;
      },
      { once: true },
    );
  }

  btn.addEventListener("mouseenter", trigger);
  btn.addEventListener("touchstart", trigger, { passive: true });

  // Delay antes de ir a WhatsApp, para que se vea el inicio de la animación.
  // Respeta click derecho/medio/ctrl+click (abrir en pestaña nueva sin delay).
  btn.addEventListener("click", (e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    const url = btn.getAttribute("href");
    setTimeout(() => window.open(url, "_blank", "noopener"), 450);
  });
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
