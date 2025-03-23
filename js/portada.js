// portada.js
export function createPortada() {
    const section = document.createElement('section');
    section.classList.add('parallax');

    // Crear el div del content box con fondo translúcido
    const contentBox = document.createElement('div');
    contentBox.classList.add('content-box');
    
    // Separamos el texto en letras individuales
    const text = "Boda Angie y Errol";
    const letters = text.split('').map(letter => `<span class="animated-letter">${letter}</span>`).join('');
    
    contentBox.innerHTML = `
        <h1 class="animated-text">${letters}</h1>
        <p>29 de Mayo 2026</p>
    `;

    // Añadimos el content box a la sección
    section.appendChild(contentBox);
    
    return section;
}
