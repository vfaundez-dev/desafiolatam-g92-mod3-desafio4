export const generarPlantillaCard = (propiedad, esArriendo = false) => {

  const costo = new Intl.NumberFormat('es-CL', {
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(propiedad.costo);

  return `
    <div class="col-md-4 mb-4">
      <div class="card property-card">
        <img
          src="${propiedad.src}"
          class="card-img-top property-img"
          alt="${propiedad.nombre}"
        />
        <div class="card-body">
          <h5 class="property-title">${propiedad.nombre}</h5>
          <p class="card-text">${propiedad.descripcion}</p>
          <div class="property-address">
            <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
          </div>
          <div class="property-features">
            <span class="property-feature">
              <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones
            </span>
            <span class="property-feature">
              <i class="fas fa-bath"></i> ${propiedad.banios} Baños
            </span>
          </div>
          <div class="property-price">$${costo}${ esArriendo ? '/mes' : '' }</div>
          <div class="property-badges">
            <span class="badge-custom badge-${ propiedad.smoke ? 'success' : 'danger' }">
              ${ propiedad.smoke
                ? '<i class="fas fa-smoking text-success"></i> Permitido fumar'
                : '<i class="fas fa-smoking-ban text-danger"></i> No se permite fumar'
              }
            </span>
            <span class="badge-custom badge-${ propiedad.pets ? 'success' : 'danger' }">
              ${ propiedad.pets
                ? '<i class="fas fa-paw text-success"></i> Mascotas permitidas'
                : '<i class="fa-solid fa-ban text-danger"></i> No se permiten mascotas'
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
};