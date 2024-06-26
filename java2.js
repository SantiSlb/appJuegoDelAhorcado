document.addEventListener('DOMContentLoaded', function() {
    const divAdivinanza = document.getElementById('divAdivinanza');
    const btnIniciar = document.getElementById('btnIniciar');

    btnIniciar.addEventListener('click', function() {
        // Ocultar el botón Iniciar
        btnIniciar.style.display = 'none';

        // Cargar objetos JSON de adivinanzas
        fetch('adivinanzas2.json')
            .then(response => response.json())
            .then(adivinanzas2 => {
                // Adivinanza aleatoria
                const randomIndex = Math.floor(Math.random() * adivinanzas2.length);
                const adivinanza = adivinanzas2[randomIndex].adivinanza;

                // Mostrar la adivinanza
                divAdivinanza.textContent = adivinanza;

                // Mostrar el div de la adivinanza cuando no se vé
                if (divAdivinanza.style.display !== 'block') {
                    divAdivinanza.style.display = 'block';
                }

                // Mostrar la respuesta en la consola
                const respuesta = adivinanzas2[randomIndex].respuesta;
                console.log("La respuesta es: " + respuesta);
            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
    });
});
