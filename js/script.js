document.addEventListener("DOMContentLoaded", function() {
  const cols = document.querySelectorAll(".col");

  // Mapeo de títulos a páginas
  const rutas = {
    "Santiago": "contents/santiago.html",
    "Valparaiso": "contents/valparaiso.html",
    "Concepción": "contents/concepcion.html",
    "Antofagasta": "contents/antofagasta.html",
    "Arica": "contents/arica.html",
    "Iquique": "contents/iquique.html",
    "La Serena": "contents/laserena.html",
    "Temuco": "contents/temuco.html",
    "Punta Arenas": "contents/puntaarenas.html",
    "Puerto Montt": "contents/puertomontt.html"
  };

  cols.forEach(col => {
    col.addEventListener("click", function() {
      const titulo = col.querySelector("h5").textContent.trim();

      if (rutas[titulo]) {
        window.location.href = rutas[titulo];
      } else {
        alert("No hay página definida para: " + titulo);
      }
    });
  });
});
