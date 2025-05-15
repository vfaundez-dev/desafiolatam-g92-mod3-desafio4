import { propiedades_arriendo } from './data.js';
import { generarPlantillaCard } from './generadorPlantilla.js';

const containerArriendo = document.getElementById('alquiler');
const rowArriendo = containerArriendo.querySelector('.row');

propiedades_arriendo.forEach( propiedad => {
    const card = generarPlantillaCard(propiedad, true);
    rowArriendo.innerHTML += card;
});
