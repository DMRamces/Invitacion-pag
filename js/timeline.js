// timeline.js
export function createTimeline() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Línea de Tiempo</h2>
        <ul>
            <li>Bienvenida</li>
            <li>Ceremonia</li>
            <li>Brindis</li>
            <li>Recepción</li>
        </ul>
    `;
    return section;
}
