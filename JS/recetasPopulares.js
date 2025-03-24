async function obtenerRecetas(categoria) {
    const API_KEY = '14a96f3eeb7242fdb189b3560d91cd49';
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${categoria}&number=3`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            mostrarRecetas(data.results, categoria);
        })
        .catch(error => {
            console.error('Error al obtener las recetas:', error);
        });
}

// Función para mostrar las recetas
function mostrarRecetas(recetas, categoria) {
    const recipesContainer = document.getElementById('recipe-container');

    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category');

    // Título de la categoría
    const categoryTitle = document.createElement('h2');
    categoryTitle.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
    categoryDiv.appendChild(categoryTitle);

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
        recipeLink.href = `detalle.html?id=${recipe.id}`
        recipeLink.target = "_blank";
        recipeLink.textContent = "Ver receta completa";
        recipeItem.appendChild(recipeLink);

        recipeList.appendChild(recipeItem);
    });

    categoryDiv.appendChild(recipeList);
    recipesContainer.appendChild(categoryDiv);
}

// Obtenemos las categorías
function obtenerCategorias() {
    const categorias = ['arroz', 'pasta', 'pollo'];

    categorias.forEach(categoria => {
        obtenerRecetas(categoria);
    });
}

obtenerCategorias();