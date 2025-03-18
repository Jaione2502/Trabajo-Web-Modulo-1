const apiKey = '14a96f3eeb7242fdb189b3560d91cd49'; 
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=drink&number=6`;


document.addEventListener("DOMContentLoaded", pedir);

function pedir() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => mostrarBebidas(data.results)) 
    .catch(error => console.error("Error al obtener las bebidas:", error));
}

function mostrarBebidas(recetas) {
  const recipesContainer = document.getElementById('recipe-container');
  
  
  // Lista de recetas
  const recipeList = document.createElement('div');
  recipeList.classList.add('recipe-list');
  
  recetas.forEach(recipe => {
      const recipeItem = document.createElement('div');
      recipeItem.classList.add('recipe-item');

      
      const recipeImage = document.createElement('img');
      recipeImage.src = recipe.image;
      recipeImage.alt = recipe.title;
      recipeItem.appendChild(recipeImage);

      
      const recipeTitle = document.createElement('h3');
      recipeTitle.textContent = recipe.title;
      recipeItem.appendChild(recipeTitle);

      
      const recipeLink = document.createElement('a');
      recipeLink.href =   `detalle.html?id=${recipe.id}`
      recipeLink.target = "_blank";
      recipeLink.textContent = "Ver receta completa";
      recipeItem.appendChild(recipeLink);

      recipeList.appendChild(recipeItem);
  });


  recipesContainer.appendChild(recipeList);
}
