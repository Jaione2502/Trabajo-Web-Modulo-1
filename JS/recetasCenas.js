const apiKey = '14a96f3eeb7242fdb189b3560d91cd49';
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=dinner&type=dinner&&number=6&apiKey=${apiKey}`;

document.addEventListener('DOMContentLoaded', () => {
    obtenerRecetas();
});

async function obtenerRecetas() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        mostrarRecetas(data.results);
    } catch (error) {
        console.error('Error al obtener las recetas:', error);
    }
}

function mostrarRecetas(recetas) {
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