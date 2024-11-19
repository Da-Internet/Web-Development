
// 
console.log("Header Cargado");
const headerElement = document.getElementById('header');

// Para el header
fetch('./Header3.html') 
    .then(response => {
        if (!response.ok) {
            throw new Error('No se pudo cargar el header');
        }
        return response.text();
    })
    .then(data => {
        headerElement.innerHTML = data;
    })
    .catch(error => {
        console.error('Error al cargar el header:', error);
    });
