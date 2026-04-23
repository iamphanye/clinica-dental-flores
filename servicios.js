const servicios = document.querySelectorAll(".servicio");

window.addEventListener("scroll", () => {
  servicios.forEach(servicio => {
    const top = servicio.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      servicio.style.opacity = "1";
      servicio.style.transform = "translateY(0)";
    }
  });
});