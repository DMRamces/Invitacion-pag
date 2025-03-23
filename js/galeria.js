// galeria.js
export function createGaleria() {
    const section = document.createElement('section');
    section.innerHTML = `
        <h2>Galería de Recuerdos</h2>
        <div class="upload">
            <input type="file" accept="image/*,video/*" multiple>
        </div>
        <div class="gallery-grid"></div>
    `;
    return section;
}
