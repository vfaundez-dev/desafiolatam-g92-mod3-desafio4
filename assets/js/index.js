import { propiedades_venta, propiedades_arriendo } from './data.js';
import { generarPlantillaCard } from './generadorPlantilla.js';

const containerVenta = document.getElementById('venta');
const containerArriendo = document.getElementById('alquiler');
const rowVenta = containerVenta.querySelector('.row');
const rowArriendo = containerArriendo.querySelector('.row');

console.log( containerArriendo )

propiedades_venta.forEach( (propiedad, index) => {
  if (index <= 2) {
    const card = generarPlantillaCard(propiedad);
    rowVenta.innerHTML += card;
  }
});

propiedades_arriendo.forEach( (propiedad, index) => {
  if (index <= 2) {
    const card = generarPlantillaCard(propiedad, true);
    rowArriendo.innerHTML += card;
  }
});