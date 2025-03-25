import { createPortada } from './portada.js';
<<<<<<< HEAD
import { createCuentaRegresiva } from './cuenta-regresiva.js';

// Agrega la cuenta regresiva en el contenedor adecuado
const cuentaRegresivaElemento = createCuentaRegresiva();
document.querySelector('#portada .content-box').appendChild(cuentaRegresivaElemento);


=======
>>>>>>> 69d986a7e59292b1d1e764b38a50d42bda2f3349
import { createTimeline } from './timeline.js';
import { createRSVP } from './rsvp.js';
import { createGaleria } from './galeria.js';
import { createRegalos } from './regalos.js';

// Cargar los componentes en sus respectivas secciones
document.getElementById('portada').appendChild(createPortada());
document.getElementById('timeline').appendChild(createTimeline());
document.getElementById('rsvp').appendChild(createRSVP());
document.getElementById('galeria').appendChild(createGaleria());
document.getElementById('regalos').appendChild(createRegalos());
