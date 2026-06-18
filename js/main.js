
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

      // Micro-interacción en touch
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();

          const url = btn.getAttribute('href');

          btn.classList.add("tapped");

          setTimeout(() => {
            window.open(url, "_blank", "noopener");
          }, 300);
        });
      });

      document
        .querySelectorAll(".reveal")
        .forEach((el) => observer.observe(el));
