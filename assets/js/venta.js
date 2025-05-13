import { propiedades_venta } from './data.js';
import { generarPlantillaCard } from './generadorPlantilla.js';

const containerVenta = document.getElementById('venta');
const rowVenta = containerVenta.querySelector('.row');

propiedades_venta.forEach( propiedad => {
  const card = generarPlantillaCard(propiedad);
  rowVenta.innerHTML += card;
});
