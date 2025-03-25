// portada.js
export function createPortada() {
    const section = document.createElement('section');
    section.classList.add('parallax');

    // Crear el div del content box con fondo translúcido
    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box');
    
    // Texto de la portada, solo el título
    /* contentBox.innerHTML = `
        <h1>¡Nos casamos!</h1>
    `;*/

    // Añadimos el content box a la sección
    section.appendChild(contentBox);
    
    return section;
}
