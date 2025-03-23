// regalos.js
export function createRegalos() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Regalos de Boda</h2>
        <p>Si deseas contribuir con nosotros, haz clic aquí:</p>
        <a href="#" class="donation-link">Enviar regalo</a>
    `;
    return section;
}
