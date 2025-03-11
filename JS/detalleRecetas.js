const apiKey = '14a96f3eeb7242fdb189b3560d91cd49'; 

// Obtener el ID de la receta de la URL
const urlParams = new URLSearchParams(window.location.search);
const recetaId = urlParams.get('id');

// Cargar los detalles de la receta
function cargarDetalleReceta() {
  fetch(`https://api.spoonacular.com/recipes/${recetaId}/information?apiKey=${apiKey}`)
    .then(response => response.json())
    .then(data => mostrarDetalleReceta(data))
    .catch(error => console.error('Error al cargar los detalles de la receta:', error));
}

// Función para mostrar los detalles
function mostrarDetalleReceta(receta) {
  const detalleElemento = document.getElementById('detalle-receta');
  detalleElemento.innerHTML = `
    <h2>${receta.title}</h2>
    <img src="${receta.image}" alt="${receta.title}">
    <br>
    <h3>Ingredientes</h3><br>
    <ul>
      ${receta.extendedIngredients.map(ingrediente => `<li>${ingrediente.original}</li>`).join('')}
    </ul>
    <br>
    <h3>Instrucciones</h3>
    <br>
    <p>${receta.instructions}</p>
  `;
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', cargarDetalleReceta);