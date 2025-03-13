const apiKey = '14a96f3eeb7242fdb189b3560d91cd49'; 
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=drink&number=10`;


document.addEventListener("DOMContentLoaded", pedir);

function pedir() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => mostrarBebidas(data.results)) 
    .catch(error => console.error("Error al obtener las bebidas:", error));
}

function mostrarBebidas(bebidas) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = ""; 

  bebidas.forEach(bebida => {
    const bebidaCard = document.createElement("div");
    bebidaCard.classList.add("recipe-card");

    bebidaCard.innerHTML = `
      <img src="${bebida.image}" alt="${bebida.title}">
      <h3>${bebida.title}</h3>
      <a href="detalle.html?id=${bebida.id}">Ver receta completa</a>
    `;

    container.appendChild(bebidaCard);
  });
}

