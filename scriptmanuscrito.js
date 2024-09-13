document.getElementById('manuscript-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const manuscript = document.getElementById('manuscript').files[0];

    if (manuscript && manuscript.type === 'application/pdf') {
        const reader = new FileReader();

        reader.onload = function(e) {
            const previewSection = document.getElementById('preview-section');
            const previewDiv = document.getElementById('preview');
            
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
});