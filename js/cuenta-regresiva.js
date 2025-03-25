// cuenta-regresiva.js
export function createCuentaRegresiva() {
    const contenedor = document.createElement('div');
    contenedor.classList.add('cuenta-regresiva');

    // Días (parte superior y más grande)
    const diasElemento = document.createElement('div');
    diasElemento.classList.add('dias');
    diasElemento.innerHTML = `
        <span class="valor-dias">0</span>
        <span class="unidad-dias">días</span>
    `;
    contenedor.appendChild(diasElemento);

    // Elementos para horas, minutos y segundos
    const lineaTiempo = document.createElement('div');
    lineaTiempo.classList.add('linea-tiempo');
    lineaTiempo.innerHTML = `
        <span class="valor horas">00</span><span class="unidad"> hrs</span> |
        <span class="valor minutos">00</span><span class="unidad"> min</span> |
        <span class="valor segundos">00</span><span class="unidad"> seg</span>
    `;
    contenedor.appendChild(lineaTiempo);

    // Referencias a los elementos de tiempo
    const valorDias = diasElemento.querySelector('.valor-dias');
    const valorHoras = lineaTiempo.querySelector('.horas');
    const valorMinutos = lineaTiempo.querySelector('.minutos');
    const valorSegundos = lineaTiempo.querySelector('.segundos');

    // Función para actualizar la cuenta regresiva
    function actualizarCuenta() {
        const evento = new Date('May 29, 2026 16:00:00').getTime();
        const ahora = new Date().getTime();
        const diferencia = evento - ahora;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        // Mostrar días o solo horas/min/seg cuando falten 48 horas
        if (diferencia > 48 * 60 * 60 * 1000) {
            contenedor.classList.remove('solo-horas');
            valorDias.textContent = dias;
        } else {
            contenedor.classList.add('solo-horas');
            valorDias.textContent = '';
        }

        // Actualizar valores de la línea de tiempo con dos dígitos siempre
        valorHoras.textContent = String(horas).padStart(2, '0');
        valorMinutos.textContent = String(minutos).padStart(2, '0');
        valorSegundos.textContent = String(segundos).padStart(2, '0');

        if (diferencia <= 0) {
            clearInterval(intervalo);
            contenedor.innerHTML = '<h2>¡El evento ha comenzado!</h2>';
        }
    }

    const intervalo = setInterval(actualizarCuenta, 1000);

    return contenedor;
}
