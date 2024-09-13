document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('manuscript-form');
    const previewSection = document.getElementById('preview-section');
    const previewDiv = document.getElementById('preview');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const manuscript = document.getElementById('manuscript').files[0];

        if (manuscript) {
            if (manuscript.type === 'application/pdf') {
                const reader = new FileReader();

                reader.onload = function(e) {
                    previewDiv.innerHTML = `
                        <p><strong>Título:</strong> ${title}</p>
                        <p><strong>Autor:</strong> ${author}</p>
                        <embed src="${e.target.result}" type="application/pdf" width="100%" height="600px">
                    `;

                    previewSection.style.display = 'block';
                };

                reader.readAsDataURL(manuscript);
            } else {
                alert('Por favor, sube un archivo PDF.');
            }
        } else {
            alert('No se ha seleccionado ningún archivo.');
        }
    });
});
