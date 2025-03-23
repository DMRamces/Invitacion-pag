// rsvp.js
export function createRSVP() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Confirma tu asistencia</h2>
        <p><a href="#" class="confirmation-button">Confirma aquí</a></p>
    `;
    return section;
}
