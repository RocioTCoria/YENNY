document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('manuscript-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const manuscript = document.getElementById('manuscript').files[0];

        if (manuscript && manuscript.type === 'application/pdf') {
            // Mostrar el pop-up de éxito
            const popupMessage = document.getElementById('mensaje-pop-up');
            popupMessage.querySelector('#pop-up-message').innerText = 'Su Manuscrito fue cargado correctamente.';
            popupMessage.style.display = 'flex';

            // Ocultar el pop-up después de 5 segundos
            setTimeout(function() {
                popupMessage.style.display = 'none';
            }, 5000);
        } else {
            // Mostrar un mensaje de error si el archivo no es PDF
            const popupMessage = document.getElementById('mensaje-pop-up');
            popupMessage.querySelector('#pop-up-message').innerText = 'Solo archivos PDF.';
            popupMessage.classList.add('popup-error');
            popupMessage.style.display = 'flex';

            // Ocultar el pop-up después de 5 segundos
            setTimeout(function() {
                popupMessage.style.display = 'none';
                popupMessage.classList.remove('popup-error');
            }, 5000);
        }
    });

    // Cerrar el pop-up manualmente
    document.getElementById('cerrar-pop-up').addEventListener('click', function() {
        document.getElementById('mensaje-pop-up').style.display = 'none';
    });
});



