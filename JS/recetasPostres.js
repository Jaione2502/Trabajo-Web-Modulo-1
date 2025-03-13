const apiKey = '14a96f3eeb7242fdb189b3560d91cd49'; 
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=dessert&number=10`;

document.addEventListener("DOMContentLoaded", pedir);

function pedir() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => mostrarPostres(data.results)) 
    .catch(error => console.error("Error al obtener postres:", error));
}

function mostrarPostres(postres) {
  const container = document.getElementById("recipe-container");
  container.innerHTML = ""; 

  postres.forEach(postre => {
    const postreCard = document.createElement("div");
    postreCard.classList.add("recipe-card");

    postreCard.innerHTML = `
      <img src="${postre.image}" alt="${postre.title}">
      <h3>${postre.title}</h3>
      <a href="detalle.html?id=${postre.id}">Ver receta completa</a>
    `;

    container.appendChild(postreCard);
  });
};