import { propiedades_venta, propiedades_arriendo } from './data.js';

const containerVenta = document.getElementById('venta');
const containerArriendo = document.getElementById('alquiler');
const rowVenta = containerVenta.querySelector('.row');
const rowArriendo = containerArriendo.querySelector('.row');

const generarPlantillaCard = (propiedad) => {

  const costo = new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(propiedad.costo);

  return `
    <div class="col-md-4 mb-4">
      <div class="card">
        <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="${propiedad.nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${propiedad.nombre}
          </h5>
          <p class="card-text">
            ${propiedad.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.banios} Baños
          </p>
          <p>
            <i class="fas fa-dollar-sign"></i> ${costo}
          </p>
          <p class="text-${ propiedad.smoke ? 'success' : 'danger' }">
            ${ propiedad.smoke
                ? '<i class="fas fa-smoking"></i> Permitido fumar'
                : '<i class="fas fa-smoking-ban"></i> No se permite fumar'
            }
          </p>
          <p class="text-${ propiedad.pets ? 'success' : 'danger' }">
            ${ propiedad.pets
                ? '<i class="fas fa-paw"></i> Mascotas permitidas'
                : '<i class="fa-solid fa-ban"></i> No se permiten mascotas'
            }
          </p>
        </div>
      </div>
    </div>
  `;
};

propiedades_venta.forEach( (propiedad, index) => {
  if (index <= 2) {
    const card = generarPlantillaCard(propiedad);
    rowVenta.innerHTML += card;
  }
});

propiedades_arriendo.forEach( (propiedad, index) => {
  if (index <= 2) {
    const card = generarPlantillaCard(propiedad);
    rowArriendo.innerHTML += card;
  }
});