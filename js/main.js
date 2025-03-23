import { createPortada } from '../js/portada.js';
import { createTimeline } from '../js/timeline.js';
import { createRSVP } from '../js/rsvp.js';
import { createGaleria } from '../js/galeria.js';
import { createRegalos } from '../js/regalos.js';

// Cargar los componentes en sus respectivas secciones
document.getElementById('portada').appendChild(createPortada());
document.getElementById('timeline').appendChild(createTimeline());
document.getElementById('rsvp').appendChild(createRSVP());
document.getElementById('galeria').appendChild(createGaleria());
document.getElementById('regalos').appendChild(createRegalos());
