document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.reproducir');
  const reproductor = document.getElementById('audio-player');

  let botonActivo = null; // Para saber qué botón se usó por última vez

  botones.forEach(boton => {
    boton.addEventListener('click', function (e) {
      e.preventDefault();
      const src = this.getAttribute('data-src');

      // Si haces clic en el mismo botón que ya está reproduciendo
      if (boton === botonActivo) {
        if (!reproductor.paused) {
          reproductor.pause();
        } else {
          reproductor.play();
        }
      } else {
        // Si es otro botón distinto, cambia la canción
        reproductor.src = src;
        reproductor.play();
        botonActivo = boton;
      }
    });
  });
});
